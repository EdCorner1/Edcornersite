import { videos } from "@/data/videos";
import { VideoCard } from "./VideoCard";

export function VideoWall() {
  const featuredVideos = videos.filter((video) => video.featured);

  return (
    <section id="work" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-lime-200">Selected videos</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
            Short-form content built to feel native, not bolted on.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            A mix of UGC, product explainers, demos, paid social angles, and organic content across AI, tech, travel, and language learning.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
