import { Quote } from "lucide-react";
import { testimonials } from "@/data/socialProof";

export function Testimonials() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-zinc-400">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">
            Useful before the camera turns on.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm shadow-slate-950/5 dark:border-white/10 dark:bg-zinc-900">
              <Quote className="mb-8 h-7 w-7 text-orange-500" aria-hidden="true" />
              <blockquote className="text-xl font-medium leading-8 tracking-[-0.02em] text-slate-950 dark:text-white">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-slate-200 pt-5 dark:border-white/10">
                <p className="font-semibold text-slate-950 dark:text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
