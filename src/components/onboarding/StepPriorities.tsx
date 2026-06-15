import PriorityChip from "./PriorityChip";
import type { Priority } from "../../types";
import { PRIORITY_LABELS } from "../../types";

interface StepPrioritiesProps {
  value: Priority[];
  onChange: (value: Priority[]) => void;
}

const ALL_PRIORITIES = Object.keys(PRIORITY_LABELS) as Priority[];

export default function StepPriorities({ value, onChange }: StepPrioritiesProps) {
  const toggle = (priority: Priority) => {
    if (value.includes(priority)) {
      onChange(value.filter((p) => p !== priority));
    } else if (value.length < 3) {
      onChange([...value, priority]);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900">What matters most to you right now?</h2>
      <p className="mt-1 text-sm text-gray-500">Pick 2-3 areas you'd like to focus on.</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {ALL_PRIORITIES.map((priority) => (
          <PriorityChip
            key={priority}
            label={PRIORITY_LABELS[priority]}
            selected={value.includes(priority)}
            onClick={() => toggle(priority)}
          />
        ))}
      </div>

      <p className="mt-3 text-sm text-gray-500">
        {value.length < 2
          ? `Select at least ${2 - value.length} more.`
          : value.length > 3
          ? "Please select no more than 3."
          : `${value.length} selected`}
      </p>
    </div>
  );
}
