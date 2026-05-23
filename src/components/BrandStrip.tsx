import { brands } from "@/data/site";

export function BrandStrip() {
  return (
    <section className="border-y border-subtle px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.28em] text-muted">Trusted by and creating for</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {brands.map((brand) => (
            <span key={brand.name} className="rounded-full border border-subtle surface-card px-5 py-3 text-sm font-medium text-soft">
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
