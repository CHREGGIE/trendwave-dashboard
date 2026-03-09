"use client";

export default function CompetitorIntel({ snapshots }) {
  // The competitor intel is stored on the latest snapshot
  const latest = snapshots?.[0];
  const intel = latest?.competitor_intel;

  if (!intel) {
    return (
      <p className="text-[var(--text-secondary)] text-sm">
        No competitor intelligence found.
      </p>
    );
  }

  const sections = [
    { key: "products", label: "Products" },
    { key: "locations", label: "Locations" },
    { key: "competitors", label: "Competitors" },
    { key: "reviews", label: "Reviews" },
    { key: "citations", label: "Citations" },
  ];

  return (
    <div className="space-y-6">
      {sections.map(({ key, label }) => {
        const section = intel[key];
        if (!section) return null;

        return (
          <div
            key={key}
            className="border border-[var(--border-subtle)] rounded-xl p-5 bg-[var(--bg-elevated-soft)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-semibold">{label}</h3>

              <span className="text-xs px-2 py-1 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                {section.count} items
              </span>
            </div>

            {/* Percentage Bar */}
            <div className="w-full h-2 bg-[var(--bg-elevated)] rounded-md overflow-hidden mb-4">
              <div
                className="h-full bg-blue-500 transition-all"
                style={{ width: `${section.percentage}%` }}
              />
            </div>

            {/* Items */}
            {section.items?.length > 0 ? (
              <ul className="space-y-1 text-sm">
                {section.items.map((item, i) => (
                  <li key={i} className="text-[var(--text-secondary)]">
                    • {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[var(--text-secondary)] text-sm italic">
                No items found.
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
