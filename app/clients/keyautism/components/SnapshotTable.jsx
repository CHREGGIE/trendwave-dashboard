"use client";

export default function SnapshotTable({ snapshots }) {
  // Filter out broken rows (missing model or latency)
  const clean = snapshots.filter(
    (s) => s.model && s.latency_ms && !isNaN(s.latency_ms)
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[var(--text-secondary)] border-b border-[var(--border-subtle)]">
            <th className="py-2">Provider</th>
            <th className="py-2">Model</th>
            <th className="py-2">Latency</th>
            <th className="py-2">Drift</th>
            <th className="py-2">Created</th>
          </tr>
        </thead>

        <tbody>
          {clean.map((s) => (
            <tr
              key={s.id}
              className="border-b border-[var(--border-subtle)] hover:bg-[var(--bg-elevated-soft)] transition"
            >
              <td className="py-2">
                <ProviderBadge provider={s.provider} />
              </td>

              <td className="py-2 font-medium">{s.model}</td>

              <td className="py-2">
                <LatencyPill ms={s.latency_ms} />
              </td>

              <td className="py-2">
                <DriftPill drift={s.drift_score} />
              </td>

              <td className="py-2 text-[var(--text-secondary)]">
                {new Date(s.created_at).toLocaleString("en-US", {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* -------------------------
   Provider Badge Component
-------------------------- */
function ProviderBadge({ provider }) {
  const colors = {
    openai: "bg-blue-600",
    gemini: "bg-purple-600",
    perplexity: "bg-emerald-600",
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded-md text-white ${colors[provider] || "bg-gray-600"}`}
    >
      {provider}
    </span>
  );
}

/* -------------------------
   Latency Pill Component
-------------------------- */
function LatencyPill({ ms }) {
  let color = "bg-green-600";

  if (ms > 20000) color = "bg-yellow-600";
  if (ms > 35000) color = "bg-red-600";

  return (
    <span
      className={`text-xs px-2 py-1 rounded-md text-white ${color}`}
    >
      {ms} ms
    </span>
  );
}

/* -------------------------
   Drift Pill Component
-------------------------- */
function DriftPill({ drift }) {
  let color = "bg-green-600";

  if (drift > 0.3) color = "bg-yellow-600";
  if (drift > 0.6) color = "bg-red-600";

  return (
    <span
      className={`text-xs px-2 py-1 rounded-md text-white ${color}`}
    >
      {drift}
    </span>
  );
}
