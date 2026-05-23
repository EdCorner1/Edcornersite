import { brands } from "@/data/site";

export function BrandStrip() {
  return (
    <section className="border-y border-white/10 px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">Trusted by and creating for</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {brands.map((brand) => (
            <span key={brand.name} className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-200">
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
