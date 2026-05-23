import { contact } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-subtle px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ed Corner. Built for short-form work that does the job.</p>
        <a href={`mailto:${contact.email}`} className="transition hover:text-main">{contact.email}</a>
      </div>
    </footer>
  );
}
