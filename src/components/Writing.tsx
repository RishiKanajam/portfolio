import AnimatedSection from "@/components/AnimatedSection";
import { writing, type WritingPost } from "@/content/content";

function PostCard({ post }: { post: WritingPost }) {
  return (
    <article className="group rounded-2xl border border-border bg-bg-subtle p-6 hover:border-border-strong transition-colors">
      <div className="flex items-center justify-between gap-2 mb-3">
        <time
          dateTime={post.date}
          className="text-[11px] text-text-4"
          style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
        >
          {new Date(post.date).toLocaleDateString("en-AU", { year: "numeric", month: "short", day: "numeric" })}
        </time>
        <div className="flex gap-1.5">
          {post.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full border border-accent/20 text-[10px] text-accent font-medium"
              style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h3 className="text-[17px] font-bold text-text-1 leading-snug mb-2 group-hover:text-accent transition-colors"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
        {post.title}
      </h3>
      <p className="text-[14px] text-text-3 leading-relaxed">{post.summary}</p>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-border p-10 text-center">
      <p
        className="text-[16px] font-bold text-text-1 mb-2"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
      >
        Writing coming soon.
      </p>
      <p className="text-[14px] text-text-3 max-w-sm mx-auto leading-relaxed">
        Topics: open-source healthcare infrastructure, LLM evaluation, building solo.
      </p>
    </div>
  );
}

export default function Writing() {
  const sorted = [...writing].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const visible = sorted.slice(0, 3);

  return (
    <section id="writing" className="section-gap border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <span className="section-label">Writing</span>
          <h2
            className="text-[32px] md:text-[44px] font-bold text-text-1 tracking-tight leading-tight mb-10"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Thinking out loud.
          </h2>
        </AnimatedSection>

        {visible.length === 0 ? (
          <AnimatedSection delay={0.05}>
            <EmptyState />
          </AnimatedSection>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {visible.map((post, i) => (
              <AnimatedSection key={post.slug} delay={0.04 + i * 0.06}>
                <PostCard post={post} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
