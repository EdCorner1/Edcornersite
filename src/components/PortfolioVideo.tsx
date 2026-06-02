"use client";

import { useRef, useState } from "react";

type PortfolioVideoProps = {
  src: string;
};

export function PortfolioVideo({ src }: PortfolioVideoProps) {
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
        controls={hasStarted}
        playsInline
        preload="metadata"
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
