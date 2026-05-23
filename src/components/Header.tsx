import { contact } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="site-header sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="logo-link text-sm font-semibold uppercase tracking-[0.24em]">
          Ed Corner
        </a>
        <nav className="nav-links hidden items-center gap-7 text-sm md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={contact.calendlyUrl}
            className="header-cta rounded-full border px-4 py-2 text-sm font-medium transition"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
