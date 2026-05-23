import { contact } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.18),transparent_32%),radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.16),transparent_28%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-lime-300/20 bg-lime-300/10 px-4 py-2 text-sm font-medium text-lime-200">
            Strategy first. Then content that earns attention.
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-main sm:text-7xl lg:text-8xl">
            UGC creator for AI, tech, travel & language brands.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-soft sm:text-xl">
            I help brands turn product value into short-form content that feels native, useful, and built around what the customer actually cares about.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            Tech and travel obsessed creator from the UK, with 6+ years across product design, marketing, and conversion rate optimisation.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={contact.calendlyUrl} className="rounded-full button-primary px-6 py-3 text-center text-sm font-semibold text-inverse transition hover:bg-lime-200">
              Book a call
            </a>
            <a href="#work" className="rounded-full border border-subtle px-6 py-3 text-center text-sm font-semibold text-main transition">
              View work
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-subtle surface-card p-4 shadow-2xl shadow-black/40">
          <div className="hero-visual-card aspect-[4/5] rounded-[1.5rem] border border-subtle p-6">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between text-sm text-muted">
                <span>Currently creating for</span>
                <span>4+ clients</span>
              </div>
              <div>
                <p className="text-7xl font-semibold tracking-[-0.08em] text-main">Ed</p>
                <p className="mt-3 max-w-sm text-lg leading-7 text-soft">
                  Native vertical content for products that need explaining without sounding like SaaS soup.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-xs text-muted">
                <div className="rounded-2xl surface-pill p-3">AI</div>
                <div className="rounded-2xl surface-pill p-3">Travel</div>
                <div className="rounded-2xl surface-pill p-3">UGC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
