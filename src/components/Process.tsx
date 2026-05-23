const steps = [
  ["01", "Research", "Get clear on the product, audience, offer, objections, and where the content needs to work."],
  ["02", "Strategy & script", "Shape the angles, hooks, talking points, and structure before filming."],
  ["03", "Film & edit", "Create native vertical content designed for the platform, not a generic ad squeezed into 9:16."],
  ["04", "Deliver & iterate", "Send usable assets, organised delivery, and room to test what resonates."],
];

export function Process() {
  return (
    <section id="process" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-lime-200">Process</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-main sm:text-6xl">How it works.</h2>
        </div>
        <div className="divide-y divide-white/10 border-y border-subtle">
          {steps.map(([number, title, body]) => (
            <div key={number} className="grid gap-5 py-7 md:grid-cols-[0.2fr_0.8fr_1.4fr] md:items-center">
              <p className="text-sm text-lime-200">{number}</p>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-main">{title}</h3>
              <p className="leading-7 text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
