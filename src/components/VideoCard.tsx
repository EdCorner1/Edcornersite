import type { Video } from "@/types/portfolio";

type VideoCardProps = {
  video: Video;
};

export function VideoCard({ video }: VideoCardProps) {
  const embedUrl = video.embedUrl || (video.streamUid ? `https://iframe.videodelivery.net/${video.streamUid}` : "");

  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-subtle surface-card">
      <div className="relative aspect-[9/16] overflow-hidden bg-zinc-900">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            className="h-full w-full"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
            title={video.title}
          />
        ) : (
          <div className="flex h-full flex-col justify-between bg-[radial-gradient(circle_at_30%_20%,rgba(132,204,22,0.24),transparent_30%),linear-gradient(145deg,#18181b,#09090b)] p-5">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
              <span>{video.category}</span>
              <span>Placeholder</span>
            </div>
            <div>
              <p className="text-5xl font-semibold tracking-[-0.08em] text-main">{video.brand.slice(0, 2)}</p>
              <p className="mt-3 text-sm leading-6 text-soft">Cloudflare Stream embed drops in here once uploaded.</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-lime-200">
          <span>{video.brand}</span>
          <span>{video.vertical}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-main">{video.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {video.platform.map((platform) => (
            <span key={platform} className="rounded-full surface-pill px-3 py-1 text-xs text-soft">
              {platform}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
