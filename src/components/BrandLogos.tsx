import { brandLogos } from "@/data/socialProof";

export function BrandLogos() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/70 px-5 py-12 dark:border-white/10 dark:bg-zinc-900/40 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-zinc-400">Brands I’ve worked with</p>
          <p className="text-sm text-slate-500 dark:text-zinc-400">AI · Apps · Travel · Tech · Language learning</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {brandLogos.map((brand) => (
            <div key={brand} className="flex h-24 items-center justify-center rounded-3xl border border-slate-200 bg-white px-5 text-center text-lg font-semibold tracking-[-0.02em] text-slate-700 shadow-sm dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-200">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
