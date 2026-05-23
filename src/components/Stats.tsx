import { stats } from "@/data/site";

export function Stats() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-lime-200 p-6 text-black sm:p-10">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-black/60">The useful bit</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
              Experience, not just camera confidence.
            </h2>
          </div>
          <p className="text-lg leading-8 text-black/70">
            I bring the creator side and the strategy side together — because pretty content that says nothing is just expensive wallpaper.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`} className="rounded-3xl bg-black/10 p-5">
              <p className="text-3xl font-semibold tracking-[-0.05em]">{stat.value}</p>
              <p className="mt-2 text-sm text-black/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
