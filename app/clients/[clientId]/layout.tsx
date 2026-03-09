import { use } from "react";

export default function ClientLayout({ children, params }) {
  const { clientId } = use(params);

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        {/* Brand */}
        <h1 className="text-xl font-semibold mb-8">TrendWave</h1>

        {/* Client Name */}
        <div className="mb-8">
          <p className="text-xs uppercase text-gray-400 tracking-wide mb-1">
            Client
          </p>
          <p className="text-lg font-medium capitalize">{clientId}</p>
        </div>

        {/* Client Navigation */}
        <nav className="space-y-3">
          <a href={`/clients/${clientId}`} className="block text-gray-700 hover:text-black">
            Overview
          </a>
          <a href={`/clients/${clientId}/drift`} className="block text-gray-700 hover:text-black">
            Model Drift
          </a>
          <a href={`/clients/${clientId}/latency`} className="block text-gray-700 hover:text-black">
            Latency
          </a>
          <a href={`/clients/${clientId}/snapshots`} className="block text-gray-700 hover:text-black">
            Snapshots
          </a>
          <a href={`/clients/${clientId}/competitors`} className="block text-gray-700 hover:text-black">
            Competitor Intelligence
          </a>
          <a href={`/clients/${clientId}/prompts`} className="block text-gray-700 hover:text-black">
            Prompt History
          </a>
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-gray-200">
          <a href="/settings" className="block text-gray-500 hover:text-black">
            Settings
          </a>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-10">
        {children}
      </main>
    </div>
  );
}
