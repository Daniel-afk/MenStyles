interface MetricCardProps {
  label: string;
  value: string;
  sublabel?: string;
}

export default function MetricCard({ label, value, sublabel }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
      {sublabel && <p className="mt-1 text-xs text-gray-400">{sublabel}</p>}
    </div>
  );
}
