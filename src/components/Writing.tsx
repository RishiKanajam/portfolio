"use client";

import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { posts, substackUrl, type Post } from "@/content/writing";

// Gradient backgrounds per platform — simulates BLAZE's dark-image card style
const PLATFORM_GRADIENT: Record<Post["platform"], string> = {
  Medium:   "from-zinc-900 to-zinc-800",
  Substack: "from-amber-950 to-amber-900",
  Personal: "from-green-950 to-green-900",
};

const PLATFORM_BADGE: Record<Post["platform"], string> = {
  Medium:   "bg-zinc-700 text-zinc-200",
  Substack: "bg-amber-800/80 text-amber-200",
  Personal: "bg-green-800/80 text-green-200",
};

function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden border border-border hover:border-border-strong transition-all duration-200"
    >
      {/* Dark gradient header — simulates cover image */}
      <div className={`relative h-32 bg-gradient-to-br ${PLATFORM_GRADIENT[post.platform]} flex items-end p-4`}>
        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${PLATFORM_BADGE[post.platform]}`}>
          {post.platform}
        </span>
        {post.featured && (
          <span className="ml-2 text-[11px] font-semibold text-accent uppercase tracking-wide">Featured</span>
        )}
        <ExternalLink
          size={14}
          className="absolute top-3 right-3 text-white/30 group-hover:text-white/70 transition-colors"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="p-5 bg-bg-subtle">
        <h3 className="text-[16px] font-semibold text-text-1 leading-snug mb-2 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-[13px] text-text-3 leading-relaxed mb-4">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-[12px] text-text-4">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-AU", {
              year: "numeric", month: "short", day: "numeric",
            })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </a>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-border overflow-hidden">
      {/* Simulated dark card header */}
      <div className="h-28 bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 dark:from-surface dark:to-bg-subtle border-b border-border" />
      <div className="p-8 bg-bg-subtle text-center">
        <p className="text-[16px] font-semibold text-text-1 mb-2">Writing coming soon.</p>
        <p className="text-[14px] text-text-3 max-w-md mx-auto leading-relaxed">
          Working on case studies covering AI security, adversarial ML, and production computer vision.
        </p>
        {substackUrl && (
          <a href={substackUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 px-4 py-2 rounded-full bg-accent text-white text-[14px] font-semibold hover:opacity-90 transition-opacity">
            Subscribe on Substack
          </a>
        )}
      </div>
    </div>
  );
}

export default function Writing() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const visible  = sorted.slice(0, 3);
  const hasMore  = sorted.length > 3;

  return (
    <section id="writing" className="section-gap border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="section-label">Writing</span>
              <h2 className="text-[32px] md:text-[42px] font-bold text-text-1 tracking-tight leading-tight">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
