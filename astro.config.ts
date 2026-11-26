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

/**
 * Retired WordPress permalinks. The site was a blog on this domain, so each
 * post existed at both /YYYY/MM/DD/slug/ and /slug/, alongside taxonomy,
 * archive and upload paths. Astro matches redirects exactly, so every shape
 * Google still crawls is listed here. Values are site-relative destinations.
 */
const legacyPaths: Record<string, string> = {
  // Book pages and excerpts
  "what-is-human-software-really-about/": "story/",
  "human-software-a-life-in-it-release-date-announced/": "story/",
  "a-fun-little-london-book-launch-for-human-software/": "story/",
  "circle-phoenix-project-office-space-human-software/": "story/",
  "reinventing-kent-and-drawing-a-map-sandport/": "story/",
  "where-office-space-meets-local-hero/": "story/",
  "human-software-now-available-in-paperback-kindle-leanpub-and-elsewhere/": "",
  "book-excerpt-the-consultants/": "sample/",
  "the-conference/": "sample/",
  "who-should-read-human-software-three-reader-experiences/": "book-club/",
  "why-keep-on-building-the-same-software-over-and-over/": "book-club/",

  // Author essays and writing updates
  "accepting-the-inevitable/": "about/",
  "being-generous-with-your-ideas/": "about/",
  "running-out-of-ideas/": "about/",
  "development-edit-complete/": "about/",
  "game-developers-get-the-ai-jitters/": "about/",
  "sleep-walking-into-the-data-centre/": "about/",
  "why-im-angry-about-data-centres-and-you-should-be-too/": "about/",
  "the-moral-and-planetary-cost-of-the-use-of-genai/": "about/",
  "reflections-on-mr-bates-vs-the-post-office/": "about/",
  "writing-as-the-way-of-becoming-a-better-writer/": "about/",
  "press/": "about/",

  // WordPress furniture
  "blog-archive/": "about/",
  "author/humansoftware1/": "about/",
  "tag/governance/": "about/",
  "tag/self-publishing/": "about/",
  "search/": "",

  // Dated archive copies of the same posts
  "2024/10/18/accepting-the-inevitable/": "about/",
  "2025/07/03/writing-as-the-way-of-becoming-a-better-writer/": "about/",
  "2025/09/02/using-ai-in-combination-with-drawing-to-make-book-illustrations/":
    "",
  "2025/09/30/human-software-now-available-in-paperback-kindle-leanpub-and-elsewhere/":
    "",
  "2025/10/24/a-fun-little-london-book-launch-for-human-software/": "story/",
  "2025/12/10/reflections-on-mr-bates-vs-the-post-office/": "about/",
  "2026/01/19/where-office-space-meets-local-hero/": "story/",
  "2026/02/07/the-moral-and-planetary-cost-of-the-use-of-genai/": "about/",

  // Uploads that no longer exist
  "wp-content/uploads/2025/10/13103209-human-software-life-in-it-debut-novel-ai-and-dehumanisation-in-the-modern-workplace.pdf":
    "story/",
  "wp-content/uploads/2025/12/Human-Software-A-Life-in-IT-A-Novel-by-Richard-W-Bown-PROLOGUE.pdf":
    "sample/",
};

const legacyRedirects = Object.fromEntries(
  Object.entries(legacyPaths).map(([from, to]) => [
    `/${from}`,
    { destination: withBase(to), status: 301 as const },
  ])
);

export default defineConfig({
  site: config.site.url,
  base,
  redirects: {
    ...legacyRedirects,

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
