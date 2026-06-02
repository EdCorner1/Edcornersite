"use client";

import { useState } from "react";
import { PortfolioVideo } from "@/components/PortfolioVideo";

type PortfolioCategory = {
  label: string;
  videos: string[];
};

type PortfolioTabsProps = {
  categories: PortfolioCategory[];
};

export function PortfolioTabs({ categories }: PortfolioTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex] ?? categories[0];

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
        {activeCategory.videos.map((src, index) => (
          <PortfolioVideo key={`${activeCategory.label}-${src}-${index}`} src={src} />
        ))}
      </div>
    </>
  );
}
