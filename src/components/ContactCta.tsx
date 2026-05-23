import { contact } from "@/data/site";

export function ContactCta() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-subtle surface-card p-8 text-center sm:p-14">
        <p className="text-sm uppercase tracking-[0.28em] text-lime-200">Contact</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-main sm:text-6xl">
          Need short-form content that actually sounds like your customer?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
          If you’re building in AI, tech, travel, or language learning, I can help turn what your product does into content people understand quickly.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={contact.calendlyUrl} className="rounded-full button-primary px-6 py-3 text-sm font-semibold text-inverse transition hover:bg-lime-200">
            Book a call
          </a>
          <a href={`mailto:${contact.email}`} className="rounded-full border border-subtle px-6 py-3 text-sm font-semibold text-main transition">
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
