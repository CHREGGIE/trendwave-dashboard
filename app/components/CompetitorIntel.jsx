export default function CompetitorIntel({ snapshots }) {
  const competitors = snapshots.flatMap((s) => s.competitors || []);

  if (!competitors.length) {
    return (
      <p className="text-[var(--text-secondary)] text-sm">
        No competitor intelligence found.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {competitors.map((c, i) => (
        <div
          key={i}
          className="border border-[var(--border-subtle)] rounded-lg p-4 bg-[var(--bg-elevated-soft)]"
        >
          <div className="font-semibold">{c.name}</div>
          <div className="text-sm text-[var(--text-secondary)] mt-1">
            {c.summary}
          </div>
        </div>
      ))}
    </div>
  );
}
