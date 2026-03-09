import Card from "@/app/components/Card";
import ClientSelector from "@/app/components/ClientSelector";

import DriftChart from "./components/DriftChart";
import ModelLatencyChart from "./components/ModelLatencyChart";
import SnapshotTable from "./components/SnapshotTable";
import CompetitorIntel from "./components/CompetitorIntel";
import PromptHistory from "./components/PromptHistory";

export default async function ClientPage() {
  const client = "keyautism";

  // Fetch snapshots
  const snapshotsRes = await fetch(
    `http://localhost:3000/api/snapshots?client=${client}`,
    { cache: "no-store" }
  );
  const snapshots = await snapshotsRes.json();

  // Fetch prompt history
  const historyRes = await fetch(
    `http://localhost:3000/api/prompt-history?client=${client}`,
    { cache: "no-store" }
  );
  let history = await historyRes.json();

  // Format timestamps
  history = history.map((item) => ({
    ...item,
    created_at_formatted: new Date(item.created_at).toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
  }));

  return (
    <div className="space-y-10">

      {/* ⭐ TOPBAR ⭐ */}
      <div className="flex items-center justify-between mb-2">
        <ClientSelector current={client} />

        <button className="text-sm px-3 py-1.5 rounded-md bg-[var(--accent)] text-white hover:opacity-90 transition">
          Refresh Data
        </button>
      </div>

      {/* ⭐ PAGE HEADER ⭐ */}
      <div>
        <h1 className="text-3xl font-bold capitalize">{client}</h1>
        <p className="text-[var(--text-secondary)] mt-1">
          Model performance, drift, latency, and prompt analytics.
        </p>
      </div>

      {/* ⭐ CHARTS ⭐ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card title="Model Drift">
          <DriftChart snapshots={snapshots} />
        </Card>

        <Card title="Latency by Model">
          <ModelLatencyChart snapshots={snapshots} />
        </Card>
      </div>

      {/* ⭐ TABLES ⭐ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card title="Snapshots">
          <SnapshotTable snapshots={snapshots} />
        </Card>

        <Card title="Competitor Intelligence">
          <CompetitorIntel snapshots={snapshots} />
        </Card>
      </div>

      {/* ⭐ PROMPT HISTORY ⭐ */}
      <PromptHistory history={history} />
    </div>
  );
}
