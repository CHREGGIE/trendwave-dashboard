"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "Key Autism", href: "/clients/keyautism", icon: "🏥" },
  { name: "Under 510", href: "/clients/under510", icon: "👕" },
  { name: "Healthcare", href: "/clients/healthcare", icon: "🩺" },
];

export default function ClientsLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--bg-elevated-soft)] border-r border-[var(--border-subtle)] p-6 flex flex-col">
        
        {/* Logo */}
        <div className="mb-10">
          <div className="text-sm font-semibold text-[var(--accent)]">
            TrendWave
          </div>
          <div className="text-xl font-bold mt-1">Client Console</div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 flex-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                  ${
                    isActive
                      ? "bg-[var(--bg-elevated)] text-white border border-[var(--border-subtle)]"
                      : "text-[var(--text-secondary)] hover:text-white hover:bg-[#1a1a1a]"
                  }
                `}
              >
                <span>{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="pt-6 border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
          v0.1 · Internal
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="max-w-6xl mx-auto space-y-10">{children}</div>
      </main>
    </div>
  );
}
