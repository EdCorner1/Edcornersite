"use client";

import { useMemo, useState } from "react";
import { PortfolioVideo } from "@/components/PortfolioVideo";

type PortfolioCategory = {
  label: string;
  videos: string[];
};

const ALL_CATEGORY_LABEL = "All";

function shuffleVideos(videos: string[]) {
  const dedupedVideos = Array.from(new Set(videos));

  return dedupedVideos
    .map((video) => ({ video, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ video }) => video);
}

type PortfolioTabsProps = {
  categories: PortfolioCategory[];
};

export function PortfolioTabs({ categories }: PortfolioTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex] ?? categories[0];
  const allVideos = useMemo(
    () => shuffleVideos(categories.flatMap((category) => category.videos)),
    [categories],
  );
  const activeVideos = activeCategory.label === ALL_CATEGORY_LABEL ? allVideos : activeCategory.videos;

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Portfolio categories">
        {categories.map((category, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={category.label}
              id={`portfolio-tab-${index}`}
              className={isActive ? "tab active" : "tab"}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="portfolio-tab-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        id="portfolio-tab-panel"
        className="portfolio-video-grid"
        role="tabpanel"
        aria-labelledby={`portfolio-tab-${activeIndex}`}
      >
        {activeVideos.map((src, index) => (
          <PortfolioVideo key={`${activeCategory.label}-${src}-${index}`} src={src} />
        ))}
      </div>
    </>
  );
}
