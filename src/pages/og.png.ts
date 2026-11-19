import type { APIRoute } from "astro";
import satori from "satori";
import sharp from "sharp";
import { fontData, experimental_getFontFileURL } from "astro:assets";
import { getFontPathByWeight } from "@/utils/getFontPathByWeight";

const INK = "#1f2a33";
const MUTED = "#55636d";
const ACCENT = "#da6b45";
const PAPER = "#fbf8f3";
const RULE = "#ddd5c6";

const headline = [
  "A software engineer caught",
  "between exhaustion",
  "and ambition.",
];

export const GET: APIRoute = async context => {
  const fonts = fontData["--font-google-sans-code"];
  // The site ships WOFF only (no duplicate TTF files), so ask for WOFF explicitly.
  const regularFontPath = getFontPathByWeight(fonts, 400, { format: "woff" });
  const boldFontPath = getFontPathByWeight(fonts, 700, { format: "woff" });

  if (regularFontPath === undefined || boldFontPath === undefined) {
    throw new Error("Cannot find the font path.");
  }

  const [regularData, boldData] = await Promise.all([
    fetch(experimental_getFontFileURL(regularFontPath, context.url)).then(res =>
      res.arrayBuffer()
    ),
    fetch(experimental_getFontFileURL(boldFontPath, context.url)).then(res =>
      res.arrayBuffer()
    ),
  ]);

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 76px",
          background: PAPER,
          color: INK,
          fontFamily: "Google Sans Code",
        },
        children: [
          // Top line: book title and author.
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      fontSize: 24,
                      fontWeight: 700,
                      letterSpacing: 6,
                      color: ACCENT,
                    },
                    children: "HUMAN SOFTWARE",
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      fontSize: 22,
                      color: MUTED,
                    },
                    children: "A NOVEL BY RICHARD W. BOWN",
                  },
                },
              ],
            },
          },
          // The hook: Beth, in one sentence.
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 6,
              },
              children: headline.map(line => ({
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    fontSize: 68,
                    fontWeight: 700,
                    lineHeight: 1.14,
                    color: INK,
                  },
                  children: line,
                },
              })),
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                width: "100%",
                alignItems: "flex-end",
                justifyContent: "space-between",
                borderTop: `2px solid ${RULE}`,
                paddingTop: 26,
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      maxWidth: 760,
                      fontSize: 24,
                      lineHeight: 1.4,
                      color: MUTED,
                    },
                    children:
                      "An AI overhaul, a small Kentish town, and the people who keep the systems running.",
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      fontSize: 24,
                      fontWeight: 700,
                      color: ACCENT,
                    },
                    children: "humansoftwarebook.com",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: [
        {
          name: "Google Sans Code",
          data: regularData,
          weight: 400,
          style: "normal",
        },
        {
          name: "Google Sans Code",
          data: boldData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(pngBuffer), {
    headers: { "Content-Type": "image/png" },
  });
};
