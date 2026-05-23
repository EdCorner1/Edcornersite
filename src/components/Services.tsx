const services = [
  {
    title: "Strategy before content",
    body: "Good UGC starts before the camera turns on. Audience, product, pain points, and buying context first — then the video has a reason to exist.",
  },
  {
    title: "Hooks and scripting",
    body: "Scroll-stopping without sounding like every creator reading from the same tired TikTok script. Hooks, angles, and structure built around the customer.",
  },
  {
    title: "Native short-form production",
    body: "Vertical video for TikTok, Reels, Shorts, LinkedIn, websites, and paid social — filmed for the platform, not squeezed into it afterwards.",
  },
  {
    title: "Organic and paid delivery",
    body: "Assets that can support awareness, education, conversion, retargeting, or testing new creative angles.",
  },
];

export function Services() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-lime-200">What I do</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-main sm:text-6xl">
            Useful strategy, then content people actually watch.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-[1.6rem] border border-subtle surface-card p-6">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-main">{service.title}</h3>
              <p className="mt-4 leading-7 text-muted">{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
