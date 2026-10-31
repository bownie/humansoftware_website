import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://humansoftwarebook.com/",
    title: "Human Software - a novel by Richard W. Bown",
    shortTitle: "Human Software - a novel by Richard W. Bown",
    description: "A story about ambition, loyalty and the people behind the systems we build.",
    author: "Richard Bown",
    profile: "https://humansoftwarebook.com",
    ogImage: "human-software-v4.jpg",
    lang: "en",
    timezone: "Europe/Amsterdam",
    dir: "ltr",
    googleTagId: "GT-NMKJ67ZK",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "bluesky",   url: "https://bsky.app/profile/bownie.bsky.social" },
    { name: "linkedin",  url: "https://www.linkedin.com/in/richard-bown/" },
    { name: "goodreads", url: "https://www.goodreads.com/author/show/59396333.Richard_W_Bown", linkTitle: "Goodreads" },
    { name: "substack",  url: "https://www.substack.com/@richardwbown" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
