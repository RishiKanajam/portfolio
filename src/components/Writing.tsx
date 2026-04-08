"use client";

import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { posts, substackUrl, type Post } from "@/content/writing";

const PLATFORM_STYLES: Record<Post["platform"], string> = {
  Medium:   "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  Substack: "bg-amber-50 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  Personal: "bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
};

function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-border bg-bg-subtle p-6 hover:border-border-strong transition-all duration-200 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 grow">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${PLATFORM_STYLES[post.platform]}`}>
              {post.platform}
            </span>
            {post.featured && (
              <span className="text-[11px] font-semibold text-accent uppercase tracking-wide">Featured</span>
            )}
          </div>
          <h3 className="text-[17px] font-semibold text-text-1 leading-snug mb-2 group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="text-[14px] text-text-3 leading-relaxed mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-3 text-[12px] text-text-4">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                year: "numeric", month: "short", day: "numeric",
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
        <ExternalLink size={15} className="text-text-4 group-hover:text-accent transition-colors mt-1 shrink-0" aria-hidden="true"/>
      </div>
    </a>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-border p-10 text-center bg-bg-subtle">
      <p className="text-[15px] text-text-2 font-medium mb-1">Writing coming soon.</p>
      <p className="text-[14px] text-text-4 mb-6">
        Working on case studies covering AI security, adversarial ML, and production computer vision.
      </p>
      {substackUrl && (
        <a href={substackUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-white text-[14px] font-semibold hover:opacity-90 transition-opacity">
          Subscribe on Substack
        </a>
      )}
    </div>
  );
}

export default function Writing() {
  // TODO: RSS auto-fetch from Medium/Substack could replace the static file.
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const visible = sorted.slice(0, 3);
  const hasMore = sorted.length > 3;

  return (
    <section id="writing" className="section-gap border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="section-label">Writing</span>
              <h2 className="text-[32px] md:text-[40px] font-bold text-text-1 tracking-tight leading-tight">
                Thinking out loud.
              </h2>
            </div>
            {substackUrl && (
              <a href={substackUrl} target="_blank" rel="noopener noreferrer"
                className="text-[13px] font-medium text-accent hover:underline shrink-0">
                Subscribe on Substack →
              </a>
            )}
          </div>
        </AnimatedSection>

        {visible.length === 0 ? (
          <AnimatedSection delay={0.05}><EmptyState /></AnimatedSection>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((post, i) => (
              <AnimatedSection key={post.url} delay={0.04 + i * 0.06}>
                <PostCard post={post} />
              </AnimatedSection>
            ))}
          </div>
        )}

        {hasMore && (
          <AnimatedSection delay={0.2} className="text-center mt-8">
            <span className="text-[14px] text-text-4">View all writing →</span>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
