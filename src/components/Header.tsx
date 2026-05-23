import { contact } from "@/data/site";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
          Ed Corner
        </a>
        <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={contact.calendlyUrl}
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}
