export default function Card({ title, actions, children }) {
  return (
    <div className="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl p-6 shadow-sm">
      {(title || actions) && (
        <div className="flex items-center justify-between mb-5">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          {actions && <div>{actions}</div>}
        </div>
      )}
      <div className="pt-2">{children}</div>
    </div>
  );
}
