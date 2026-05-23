import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-lime-200">Selected work</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-main sm:text-6xl">
            Brands, products, and content problems I work best on.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="flex min-h-[28rem] flex-col justify-between rounded-[1.6rem] border border-subtle surface-card p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-lime-200">{project.brand}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-main">{project.title}</h3>
                <p className="mt-5 leading-7 text-muted">{project.summary}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.deliverables.map((deliverable) => (
                  <span key={deliverable} className="rounded-full surface-pill px-3 py-1 text-xs text-soft">
                    {deliverable}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
