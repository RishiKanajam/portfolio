# Rishi Kanajam — Portfolio

Clean, recruiter-friendly personal portfolio built with Next.js, Tailwind CSS v4, and Framer Motion.

---

## Editing content

All copy lives in two files. You should never need to touch a component to update text.

### `src/content/content.ts`

Controls everything except blog posts:

- `siteConfig` — name, email, LinkedIn, GitHub, mailto href
- `hero` — availability pill text, resume link
- `about` — bio paragraphs, tech chip list
- `experience` — role, company, dates, bullet points
- `projects` — title, description, tech chips, links, image path
- `certifications` / `publications` — credentials and papers
- `contact` — pitch paragraph

### `src/content/writing.ts`

Controls the Writing section. Add a new post by prepending to the `posts` array:

```ts
{
  title: "My post title",
  excerpt: "One-line summary shown on the card.",
  url: "https://medium.com/@rishikanajam/...",
  platform: "Medium",          // "Medium" | "Substack" | "Personal"
  publishedAt: "2025-09-01",   // ISO date — sorting is automatic
  readingTime: "6 min read",
  tags: ["AI Security", "LLM"],
  featured: false,
}
```

The section shows the 3 most recent posts sorted by `publishedAt`. If you have more than 3 it shows a "View all writing →" prompt.

Set `substackUrl` at the top of `writing.ts` to show a Subscribe button:

```ts
export const substackUrl = "https://rishikanajam.substack.com";
```

---

## Swapping project placeholders for real screenshots

Each project card currently shows a terminal code snippet. To replace it with a screenshot:

1. Drop the image into `public/screenshots/`, e.g. `public/screenshots/ocius.png`
2. Open `src/content/content.ts`
3. Find the project and set the `image` field:

```ts
{
  title: "Ocius Technology — Maritime Computer Vision",
  image: "/screenshots/ocius.png",   // ← add this line
  // ...rest unchanged
}
```

The card layout automatically switches from the terminal placeholder to the image. No component changes needed.

---

## Adding your avatar

Replace the initials placeholder in the hero:

1. Drop `avatar.jpg` (or `.png`) into `public/`
2. Open `src/components/Hero.tsx` and find the comment `TODO: replace src with a real photo`
3. Replace the `<div>` block with:

```tsx
<Image
  src="/avatar.jpg"
  alt="Rishi Kanajam"
  width={56}
  height={56}
  className="w-14 h-14 rounded-full object-cover border border-border"
  priority
/>
```

---

## Deploying to Vercel

1. Push the repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Framework preset: **Next.js** (auto-detected)
4. Add your resume: drop `resume.pdf` into the `public/` folder and commit — the Resume button links to `/resume.pdf`
5. Click **Deploy**

Vercel Analytics and Speed Insights are already wired up — they activate automatically once the site is deployed under a Vercel domain.

---

## Wiring up the Ask Me AI assistant

The Ask Me section currently uses a stub. To connect it to Claude:

**1.** Add your key to Vercel environment variables:

- Name: `ANTHROPIC_API_KEY`
- Value: your key from [console.anthropic.com](https://console.anthropic.com)

**2.** Create `src/app/api/ask/route.ts`:

```ts
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

export async function POST(req: Request) {
  const { messages } = await req.json();
  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    system:
      "You are Rishi Kanajam's portfolio assistant. Answer questions about Rishi's experience, projects, skills, and availability concisely and in first person on his behalf.",
    messages,
  });
  const content = response.content[0];
  if (content.type !== "text") return Response.json({ error: "Unexpected response" }, { status: 500 });
  return Response.json({ content: content.text });
}
```

**3.** In `src/components/AIChatbot.tsx`, replace the `stubAsk` call with:

```ts
const res = await fetch("/api/ask", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ messages: next }),
});
const data = await res.json();
const reply = data.content as string;
```

---

## Updating your email

In `src/content/content.ts`:

```ts
email: "your@email.com",
mailtoHref: "mailto:your@email.com?subject=Re%3A%20Software%20Engineer%20opportunity&body=Hi%20Rishi%2C%0A%0A",
```

---

## Dark mode

The theme toggle in the nav switches between light and dark. Preference is saved to `localStorage` and applied before first paint (no flash on reload). Both modes are intentionally styled.

---

## Dev

```bash
npm run dev     # start dev server at localhost:3000
npm run build   # production build
npm run lint    # ESLint
```
