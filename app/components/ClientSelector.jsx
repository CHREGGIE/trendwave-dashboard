"use client";

import { useRouter, usePathname } from "next/navigation";

const clients = [
  { name: "Key Autism", slug: "keyautism" },
  { name: "Under 510", slug: "under510" },
  { name: "Healthcare", slug: "healthcare" },
];

export default function ClientSelector({ current }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e) => {
    const newClient = e.target.value;
    router.push(`/clients/${newClient}`);
  };

  return (
    <select
      value={current}
      onChange={handleChange}
      className="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-md px-3 py-2 text-sm"
    >
      {clients.map((c) => (
        <option key={c.slug} value={c.slug}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
