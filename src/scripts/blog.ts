import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/** Datum in het Nederlands, bijvoorbeeld "10 november 2026". */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Amsterdam" });
}

/** Datum en tijd in het Nederlands, bijvoorbeeld "17 november 2026 om 09:00". */
export function formatDateTime(date: Date): string {
  const time = date.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Amsterdam" });
  return `${formatDate(date)} om ${time}`;
}

/** Gepland: een echt artikel met een publicatietijd die nog niet bereikt is. */
export function isScheduled(post: Post, now = new Date()): boolean {
  return !post.data.placeholder && !!post.data.date && post.data.date > now;
}

/**
 * Artikelen die op de site horen. Geplande artikelen tellen pas mee als hun tijd voorbij is
 * op het moment van bouwen; scripts/check-scheduled.mjs start op tijd een nieuwe build.
 * In de devserver zie je ze wel, met een label, zodat je ze kunt nalezen.
 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog");
  return posts
    .filter((post) => import.meta.env.DEV || !isScheduled(post))
    .sort((a, b) => (b.data.date?.getTime() ?? Infinity) - (a.data.date?.getTime() ?? Infinity));
}
