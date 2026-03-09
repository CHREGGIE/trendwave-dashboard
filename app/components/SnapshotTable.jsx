export default function SnapshotTable({ snapshots }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[var(--text-secondary)] border-b border-[var(--border-subtle)]">
            <th className="py-2">Provider</th>
            <th className="py-2">Model</th>
            <th className="py-2">Latency</th>
            <th className="py-2">Drift</th>
          </tr>
        </thead>

        <tbody>
          {snapshots.map((s) => (
            <tr
              key={s.id}
              className="border-b border-[var(--border-subtle)] hover:bg-[var(--bg-elevated-soft)] transition"
            >
              <td className="py-2">{s.provider}</td>
              <td className="py-2">{s.model}</td>
              <td className="py-2">{s.latency_ms} ms</td>
              <td className="py-2">{s.drift_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
