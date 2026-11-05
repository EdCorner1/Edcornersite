"use client";

import { useRef, useState } from "react";

export type PortfolioVideoItem = {
  src: string;
  poster?: string;
};

type PortfolioVideoProps = PortfolioVideoItem & {
  eager?: boolean;
};

export function PortfolioVideo({ src, poster }: PortfolioVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function handlePlay() {
    setHasError(false);
    setHasStarted(true);
    try {
      await videoRef.current?.play();
    } catch {
      setHasError(true);
      setHasStarted(false);
    }
  }

  const videoSrc = poster ? src : `${src}#t=0.1`;

  return (
    <div className="portfolio-video-shell">
      <video
        ref={videoRef}
        className="portfolio-video"
        src={videoSrc}
        poster={poster}
        controls={hasStarted && !hasError}
        playsInline
        preload="metadata"
        onPlay={() => setHasStarted(true)}
        onError={() => {
          setHasError(true);
          setHasStarted(false);
        }}
      />
      {!hasStarted ? (
        <button
          className="video-play-button"
          type="button"
          aria-label="Play video"
          onClick={handlePlay}
        >
          <span aria-hidden="true">▶</span>
        </button>
      ) : null}
      {hasError ? (
        <div className="video-error-toast" role="status">
          Video file not found in Vercel Blob store yet
        </div>
      ) : null}
    </div>
  );
}
