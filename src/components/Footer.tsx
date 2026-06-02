import { BriefcaseBusiness, Code2, ExternalLink, Mail } from "lucide-react";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/edcorner/", icon: BriefcaseBusiness },
  { label: "Twitter/X", href: "https://x.com/edcorner", icon: ExternalLink },
  { label: "Portfolio GitHub", href: "https://github.com/EdCorner1", icon: Code2 },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white px-5 py-16 dark:border-white/10 dark:bg-zinc-950 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-zinc-400">Work with me</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">
              Send me the product. I’ll send back video angles.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-300">
              Useful for AI tools, apps, travel products, and tech brands that need someone who can understand the thing before filming it.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="https://calendly.com/edcorner"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-zinc-100"
            >
              Book a call
            </a>
            <a
              href="mailto:hello@edcorner.co.uk"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-white/20 dark:hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              hello@edcorner.co.uk
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-slate-200 pt-8 dark:border-white/10 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500 dark:text-zinc-400">© {new Date().getFullYear()} Ed Corner. UGC for AI, apps, tech, and travel products.</p>
          <nav className="flex flex-wrap gap-3" aria-label="Professional networks">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/20 dark:hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
