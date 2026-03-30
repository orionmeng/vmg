"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/agents", label: "Agents" },
  { href: "/compositions", label: "Compositions" },
  { href: "/patch-notes", label: "Patch Notes" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-val-teal-light bg-val-teal/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-widest uppercase text-val-red"
        >
          VMG
        </Link>

        <ul className="flex gap-1 sm:gap-2">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-val-red text-white"
                      : "text-val-cream-dark hover:bg-val-teal-light hover:text-val-cream"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
