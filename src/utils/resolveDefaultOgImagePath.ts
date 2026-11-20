import type { ResolvedAstroPaperConfig } from "@/types/config";
import { getAssetPath } from "./withBase";

const publicFiles = import.meta.glob("/public/*", { eager: false });

function existsInPublic(filename: string): boolean {
  return `/public/${filename}` in publicFiles;
}

/**
 * Resolves the absolute OG image path used for pages/posts.
 *
 * Security note: `site.ogImage` must be a single filename under `public/` to avoid
 * path traversal or referencing arbitrary files.
 *
 * There is no generated fallback: the file must exist, so a missing card fails the
 * build instead of shipping a broken social preview.
 */
export function resolveDefaultOgImagePath(
  config: ResolvedAstroPaperConfig
): string {
  const filename = config.site.ogImage;
  if (
    filename.includes("..") ||
    filename.includes("/") ||
    filename.includes("\\")
  ) {
    throw new Error(
      `site.ogImage must be a single filename in public/ (e.g. "social-card.jpg"), got "${filename}"`
    );
  }

  if (!existsInPublic(filename)) {
    throw new Error(
      `AstroPaper: missing public/${filename}. Add that file or point site.ogImage at an existing file under public/.`
    );
  }

  return getAssetPath(filename);
}
