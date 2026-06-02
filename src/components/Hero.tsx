import { ArrowRight, Play, Sparkles } from "lucide-react";

const heroCards = [
  { label: "AI app demo", caption: "Show the problem before the feature." },
  { label: "Travel tech hook", caption: "Turn a tiny pain point into the whole video." },
  { label: "Product explainer", caption: "Make the clever bit obvious." },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-10 sm:px-8 lg:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_12%,rgba(59,130,246,0.13),transparent_30rem),radial-gradient(circle_at_84%_8%,rgba(249,115,22,0.10),transparent_28rem)]" />
      <div className="mx-auto grid max-w-7xl gap-14 pb-20 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-28 lg:pt-20">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-300">
            <Sparkles className="h-4 w-4 text-orange-500" aria-hidden="true" />
            UGC for AI, apps, tech, and travel brands
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-slate-950 sm:text-7xl lg:text-[6.2rem] dark:text-white">
            I make tech products look obvious.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-600 dark:text-zinc-300">
            Most tech UGC is either too polished to feel native, or too casual to explain the product. I sit in the middle: creator delivery, product brain, clear videos people can actually follow.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://calendly.com/edcorner"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-zinc-100 dark:focus:ring-white dark:focus:ring-offset-zinc-950"
            >
              Work with me
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-white/20 dark:hover:text-white dark:focus:ring-white dark:focus:ring-offset-zinc-950"
            >
              See the work
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-slate-600 dark:text-zinc-300">
            <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 dark:border-white/10 dark:bg-zinc-900/70">50+ brand deals</span>
            <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 dark:border-white/10 dark:bg-zinc-900/70">600K+ monthly views</span>
            <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 dark:border-white/10 dark:bg-zinc-900/70">Tech-fluent creator</span>
          </div>
        </div>

        <div className="relative min-h-[36rem] lg:min-h-[42rem]">
          <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-100 via-white to-orange-100 blur-2xl dark:from-blue-950/30 dark:via-zinc-950 dark:to-orange-950/30" />
          <div className="relative mx-auto grid max-w-2xl grid-cols-3 gap-4">
            {heroCards.map((card, index) => (
              <article
                key={card.label}
                className={`relative overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 p-4 shadow-2xl shadow-slate-950/15 ${index === 1 ? "mt-14" : "mt-0"} ${index === 2 ? "mt-28" : ""}`}
              >
                <div className="aspect-[9/16] rounded-[1.35rem] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.28),transparent_30%),linear-gradient(160deg,#111827,#020617)] p-4 text-white">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.2em] text-white/55">
                      <span>Ed</span>
                      <span>9:16</span>
                    </div>
                    <div>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg">
                        <Play className="h-5 w-5 fill-slate-950" aria-hidden="true" />
                      </div>
                      <h2 className="text-2xl font-semibold leading-none tracking-[-0.05em]">{card.label}</h2>
                      <p className="mt-3 text-sm leading-5 text-white/68">{card.caption}</p>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
                      <div className="h-full w-2/3 rounded-full bg-orange-300" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
