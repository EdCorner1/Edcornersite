import { Check } from "lucide-react";
import { pricingPlans } from "@/data/socialProof";

export function Pricing() {
  return (
    <section id="pricing" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-zinc-400">Pricing</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">
            Simple starting points. Custom if the brief needs it.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-zinc-300">
            These are starting packages for short-form video work. Usage, paid media rights, and larger campaign requirements can be scoped separately.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[2rem] border p-7 shadow-sm ${
                plan.featured
                  ? "border-slate-950 bg-slate-950 text-white shadow-slate-950/15 dark:border-white dark:bg-white dark:text-slate-950"
                  : "border-slate-200 bg-white text-slate-950 dark:border-white/10 dark:bg-zinc-900 dark:text-white"
              }`}
            >
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">{plan.name}</h3>
              <p className={`mt-4 text-4xl font-semibold tracking-[-0.04em] ${plan.featured ? "text-white dark:text-slate-950" : "text-slate-950 dark:text-white"}`}>{plan.price}</p>
              <p className={`mt-5 leading-7 ${plan.featured ? "text-white/70 dark:text-slate-600" : "text-slate-600 dark:text-zinc-300"}`}>{plan.description}</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm font-medium">
                    <Check className={`mt-0.5 h-4 w-4 flex-none ${plan.featured ? "text-orange-300 dark:text-orange-500" : "text-orange-500"}`} aria-hidden="true" />
                    <span className={plan.featured ? "text-white/80 dark:text-slate-700" : "text-slate-600 dark:text-zinc-300"}>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
