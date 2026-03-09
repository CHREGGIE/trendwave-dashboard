"use client";

import { useState } from "react";
import Card from "@/app/components/Card";

export default function PromptHistory({ history }) {
  return (
    <Card title="Prompt History">
      {(!history || history.length === 0) && (
        <p className="text-[var(--text-secondary)] text-sm">
          No prompt history found.
        </p>
      )}

      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
        {history?.map((item) => (
          <HistoryItem key={item.id} item={item} />
        ))}
      </div>
    </Card>
  );
}

function HistoryItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-[var(--border-subtle)] rounded-lg p-4 bg-[var(--bg-elevated-soft)] hover:bg-[#161616] transition cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm font-medium">
            {item.provider} • {item.model}
          </div>
          <div className="text-xs text-[var(--text-secondary)]">
            {item.created_at_formatted}
          </div>
        </div>

        <div className="text-xs text-[var(--accent)] font-semibold">
          {open ? "Hide" : "View"}
        </div>
      </div>

      {/* Expanded content */}
      {open && (
        <div className="mt-4 space-y-4">
          {/* Prompt */}
          <div>
            <div className="text-xs font-semibold mb-1">Prompt</div>
            <pre className="text-xs bg-[var(--bg-elevated)] p-3 rounded border border-[var(--border-subtle)] overflow-auto whitespace-pre-wrap">
              {item.prompt}
            </pre>
          </div>

          {/* Response */}
          <div>
            <div className="text-xs font-semibold mb-1">Response</div>
            <pre className="text-xs bg-[var(--bg-elevated)] p-3 rounded border border-[var(--border-subtle)] overflow-auto whitespace-pre-wrap">
              {item.response}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
