interface PriorityChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function PriorityChip({ label, selected, onClick }: PriorityChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
        selected
          ? "bg-primary-600 text-white border-primary-600"
          : "bg-white text-gray-700 border-gray-300 hover:border-primary-400"
      }`}
    >
      {label}
    </button>
  );
}
