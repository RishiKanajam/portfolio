// ─── Writing / Blog posts ─────────────────────────────────────────────────────
// Add new posts by prepending an entry to the `posts` array.
// The Writing section automatically shows the 3 most recent (sorted by publishedAt).
//
// TODO: RSS auto-fetch from Medium/Substack could replace this manual file.
// To implement: fetch https://medium.com/feed/@your-handle or
// https://your-publication.substack.com/feed, parse with a library like
// `rss-parser`, and merge/deduplicate against this array. Cache the result
// with Next.js `fetch` revalidation so the page stays fast.

export interface Post {
  title: string;
  excerpt: string;
  url: string;
  platform: "Medium" | "Substack" | "Personal";
  publishedAt: string; // ISO 8601 date string, e.g. "2025-03-15"
  readingTime: string; // human-readable, e.g. "6 min read"
  tags: string[]; // for future filtering
  featured?: boolean; // highlight a specific post
}

// ── Substack subscription URL ─────────────────────────────────────────────────
// Set this to your Substack subscribe URL to show a "Subscribe" button.
// Leave empty ("") to hide the button entirely.
export const substackUrl = "";

// ── Posts ─────────────────────────────────────────────────────────────────────
// Add new entries here. Sort doesn't matter — the component sorts by publishedAt.
export const posts: Post[] = [
  // Uncomment and fill in when your first post is live:
  //
  // {
  //   title: "How I broke my own YOLOv8 model with adversarial patches",
  //   excerpt:
  //     "What happens when you treat your own production CV model as the red team target. Patches, perturbations, and what actually held up.",
  //   url: "https://medium.com/@rishikanajam/...",
  //   platform: "Medium",
  //   publishedAt: "2025-06-01",
  //   readingTime: "8 min read",
  //   tags: ["AI Security", "Computer Vision", "Adversarial ML"],
  //   featured: true,
  // },
];
