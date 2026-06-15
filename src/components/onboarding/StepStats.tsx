import type { UserStats } from "../../types";

interface StepStatsProps {
  value: UserStats;
  onChange: (value: UserStats) => void;
}

export default function StepStats({ value, onChange }: StepStatsProps) {
  const update = (field: keyof UserStats, raw: string) => {
    const num = raw === "" ? 0 : Number(raw);
    onChange({ ...value, [field]: num });
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900">Let's start with the basics</h2>
      <p className="mt-1 text-sm text-gray-500">
        This helps us tailor your plan to where you're starting from and what you're working toward.
      </p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Age</span>
          <input
            type="number"
            min={0}
            value={value.age || ""}
            onChange={(e) => update("age", e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="e.g. 28"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Height (cm)</span>
          <input
            type="number"
            min={0}
            value={value.heightCm || ""}
            onChange={(e) => update("heightCm", e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="e.g. 178"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Weight (kg)</span>
          <input
            type="number"
            min={0}
            value={value.weightKg || ""}
            onChange={(e) => update("weightKg", e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="e.g. 75"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Annual income (USD)</span>
          <input
            type="number"
            min={0}
            value={value.annualIncome || ""}
            onChange={(e) => update("annualIncome", e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="e.g. 65000"
          />
        </label>
      </div>
    </div>
  );
}
