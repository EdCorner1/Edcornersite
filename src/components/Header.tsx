export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/82 px-5 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/78 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 dark:text-white">
          Ed Corner
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 dark:text-zinc-300 md:flex" aria-label="Primary navigation">
          <a className="transition hover:text-slate-950 dark:hover:text-white" href="#work">Portfolio</a>
          <a className="transition hover:text-slate-950 dark:hover:text-white" href="#pricing">Pricing</a>
          <a className="transition hover:text-slate-950 dark:hover:text-white" href="#contact">Contact</a>
        </nav>
        <a
          href="https://calendly.com/edcorner"
          className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-zinc-100"
        >
          Work with me
        </a>
      </div>
    </header>
  );
}
