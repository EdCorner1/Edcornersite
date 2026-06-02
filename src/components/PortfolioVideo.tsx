"use client";

import { useRef, useState } from "react";

export type PortfolioVideoItem = {
  src: string;
  poster?: string;
};

type PortfolioVideoProps = PortfolioVideoItem & {
  eager?: boolean;
};

export function PortfolioVideo({ src, poster, eager = false }: PortfolioVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  async function handlePlay() {
    setHasStarted(true);
    await videoRef.current?.play();
  }

  return (
    <div className="portfolio-video-shell">
      <video
        ref={videoRef}
        className="portfolio-video"
        src={src}
        poster={poster}
        controls={hasStarted}
        playsInline
        preload={eager ? "auto" : "none"}
        onPlay={() => setHasStarted(true)}
      />
      {!hasStarted ? (
        <button className="video-play-button" type="button" aria-label="Play video" onClick={handlePlay}>
          <span aria-hidden="true">▶</span>
        </button>
      ) : null}
    </div>
  );
}
