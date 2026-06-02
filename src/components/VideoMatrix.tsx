"use client";

import { Film, Lightbulb, Play, Sparkles, Video } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import {
  portfolioCategories,
  portfolioVideos,
  type PortfolioCategory,
  type PortfolioVideo,
} from "@/data/portfolioVideos";

function VideoCard({ video }: { video: PortfolioVideo }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePointerEnter() {
    void videoRef.current?.play();
  }

  function handlePointerLeave() {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }

  return (
    <article
      className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-sm shadow-slate-950/5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-950/10 dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/20"
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      onFocus={handlePointerEnter}
      onBlur={handlePointerLeave}
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-slate-950">
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.posterUrl}
          className="h-full w-full object-cover"
          muted
          playsInline
          loop
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-950/10 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md">
          <Play className="h-3.5 w-3.5 fill-white" aria-hidden="true" />
          Hover to preview
        </div>
        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-white/92 p-4 shadow-xl backdrop-blur-md dark:bg-zinc-950/86">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="rounded-full bg-slate-950 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white dark:bg-white dark:text-slate-950">
              {video.category}
            </span>
            <span className="text-sm font-semibold text-slate-500 dark:text-zinc-400">{video.performanceMetric}</span>
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">{video.title}</h3>
          <p className="mt-2 text-sm leading-5 text-slate-600 dark:text-zinc-300">{video.context}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-zinc-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {video.hookType}
          </p>
        </div>
      </div>
    </article>
  );
}

export function VideoMatrix() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All Work");

  const filteredVideos = useMemo(() => {
    if (activeCategory === "All Work") return portfolioVideos;
    return portfolioVideos.filter((video) => video.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
              <Film className="h-4 w-4" aria-hidden="true" />
              Selected work
            </div>
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">
              Demos, hooks, and explainers for products that need more than a pretty face.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600 dark:text-zinc-300">
            The best UGC for tech usually starts before the camera turns on: understand the product, find the useful angle, then make the video feel easy to watch.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3" role="tablist" aria-label="Portfolio video categories">
          {portfolioCategories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/15 dark:border-white dark:bg-white dark:text-slate-950"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-white/20 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur md:grid-cols-3 dark:border-white/10 dark:bg-zinc-900/80">
          <div className="flex items-center gap-3">
            <Lightbulb className="h-5 w-5 text-slate-950 dark:text-white" aria-hidden="true" />
            <p className="text-sm font-medium text-slate-600 dark:text-zinc-300">Useful product angles, not generic creator scripts.</p>
          </div>
          <div className="flex items-center gap-3">
            <Video className="h-5 w-5 text-slate-950 dark:text-white" aria-hidden="true" />
            <p className="text-sm font-medium text-slate-600 dark:text-zinc-300">Native vertical edits for TikTok, Reels, Shorts, LinkedIn, and paid tests.</p>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-slate-950 dark:text-white" aria-hidden="true" />
            <p className="text-sm font-medium text-slate-600 dark:text-zinc-300">Hooks written around real use cases, objections, and moments of clarity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
