import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://humansoftwarebook.com/",
    title: "Human Software — a novel by Richard W. Bown",
    shortTitle: "Human Software",
    description:
      "Beth is a software engineer caught between exhaustion and ambition, holding a failing system together while an AI overhaul threatens her town.",
    author: "Richard Bown",
    profile: "https://humansoftwarebook.com",
    ogImage: "og.png",
    lang: "en",
    timezone: "Europe/Amsterdam",
    dir: "ltr",
    googleTagId: "GT-NMKJ67ZK",
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showBackButton: true,
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
