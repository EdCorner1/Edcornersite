"use client";

import { useMemo, useState } from "react";
import { PortfolioVideo } from "@/components/PortfolioVideo";

type PortfolioCategory = {
  label: string;
  videos: string[];
};

const ALL_CATEGORY_LABEL = "All";
const INITIAL_VIDEO_LIMIT = 4;

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
  const [isExpanded, setIsExpanded] = useState(false);
  const activeCategory = categories[activeIndex] ?? categories[0];
  const allVideos = useMemo(
    () => shuffleVideos(categories.flatMap((category) => category.videos)),
    [categories],
  );
  const activeVideos = activeCategory.label === ALL_CATEGORY_LABEL ? allVideos : activeCategory.videos;
  const visibleVideos = isExpanded ? activeVideos : activeVideos.slice(0, INITIAL_VIDEO_LIMIT);
  const hiddenVideoCount = Math.max(activeVideos.length - INITIAL_VIDEO_LIMIT, 0);

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
              onClick={() => {
                setActiveIndex(index);
                setIsExpanded(false);
              }}
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
        {visibleVideos.map((src, index) => (
          <PortfolioVideo key={`${activeCategory.label}-${src}-${index}`} src={src} eager={index === 0} />
        ))}
      </div>

      {hiddenVideoCount > 0 && (
        <button
          className="show-more-videos"
          type="button"
          aria-expanded={isExpanded}
          aria-controls="portfolio-tab-panel"
          onClick={() => setIsExpanded((current) => !current)}
        >
          <span>{isExpanded ? "Show less" : `See ${hiddenVideoCount} more`}</span>
          <span className="show-more-icon" aria-hidden="true">
            {isExpanded ? "↑" : "↓"}
          </span>
        </button>
      )}
    </>
  );
}
