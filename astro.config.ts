import {
  defineConfig,
  envField,
  fontProviders,
  svgoOptimizer,
} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import config from "./astro-paper.config";

const base = process.env.ASTRO_BASE || "/";

/**
 * Prefix a root-relative path with the configured `base`.
 * Astro uses redirect destinations verbatim, so they must be base-aware.
 * Empty paths resolve to the site root, with a trailing slash.
 */
const withBase = (path: string) => {
  const basePath = base.replace(/\/+$/, "");
  const normalized = path.replace(/^\/+/, "");
  return normalized ? `${basePath}/${normalized}` : `${basePath}/`;
};

export default defineConfig({
  site: config.site.url,
  base,
  redirects: {
    // Fragments are not crawlable URLs, so these three land on the full page.
    "/reviews": { destination: withBase("story/"), status: 301 },
    "/praise": { destination: withBase("story/"), status: 301 },
    "/praise-for-human-software": {
      destination: withBase("story/"),
      status: 301,
    },
    "/how-human-software-got-its-look": {
      destination: withBase(""),
      status: 301,
    },
    "/using-ai-in-combination-with-drawing-to-make-book-illustrations": {
      destination: withBase(""),
      status: 301,
    },
    "/what-ive-learned-six-weeks-after-publishing-human-software": {
      destination: withBase(""),
      status: 301,
    },
    "/human-software-a-novel-for-tech-workers": {
      destination: withBase("story/"),
      status: 301,
    },
    "/prologue": { destination: withBase(""), status: 301 },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: page => {
        const path = new URL(page).pathname;

        // Assets and machine routes are not pages.
        if (/\.(png|jpe?g|svg|pdf|xml|txt|json)$/i.test(path)) return false;

        // noindex stubs and redirects should never be advertised to crawlers.
        const excluded = [
          "/contact-me/",
          "/how-to-purchase/",
          "/human-software-where-would-you-draw-the-line/",
          "/thanks-for-signing-up/",
          // Thin pages kept out of the index (see their `noindex` frontmatter).
          "/competition-terms-and-conditions/",
          "/gerbach-landing/",
        ];

        return !excluded.some(entry => path.endsWith(entry));
      },
    }),
  ],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss() as any],
  },
  fonts: [
    {
      name: "Google Sans Code",
      cssVariable: "--font-google-sans-code",
      provider: fontProviders.google(),
      fallbacks: ["monospace"],
      weights: [300, 400, 500, 600, 700],
      styles: ["normal"],
      formats: ["woff"],
    },
    {
      name: "DM Sans",
      cssVariable: "--font-dm-sans",
      provider: fontProviders.google(),
      fallbacks: ["sans-serif"],
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      formats: ["woff"],
    },
    {
      name: "Fraunces",
      cssVariable: "--font-fraunces",
      provider: fontProviders.google(),
      fallbacks: ["Georgia", "serif"],
      weights: [400, 500, 600],
      styles: ["normal"],
      formats: ["woff"],
    },
  ],
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
