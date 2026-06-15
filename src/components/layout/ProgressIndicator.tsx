interface ProgressIndicatorProps {
  current: number;
  total: number;
  labels: string[];
}

export default function ProgressIndicator({ current, total, labels }: ProgressIndicatorProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`h-1.5 flex-1 rounded-full ${
              step <= current ? "bg-primary-600" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
      <div className="mt-1.5 flex justify-between text-xs text-gray-500">
        <span>
          Step {current} of {total}
        </span>
        <span className="font-medium text-gray-700">{labels[current - 1]}</span>
      </div>
    </div>
  );
}
