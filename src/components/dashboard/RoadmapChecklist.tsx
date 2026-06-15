import type { RoadmapGoal, RoadmapGoalId } from "../../types";

interface RoadmapChecklistProps {
  goals: RoadmapGoal[];
  onToggle: (id: RoadmapGoalId) => void;
}

export default function RoadmapChecklist({ goals, onToggle }: RoadmapChecklistProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white shadow-sm divide-y divide-gray-100">
      {goals.map((goal) => (
        <label
          key={goal.id}
          className="flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-50"
        >
          <input
            type="checkbox"
            checked={goal.completed}
            onChange={() => onToggle(goal.id)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <div className="flex-1">
            <p
              className={`font-medium ${
                goal.completed ? "text-gray-400 line-through" : "text-gray-900"
              }`}
            >
              {goal.title}
            </p>
            <p className="text-sm text-gray-500">{goal.description}</p>
          </div>
          <span className="text-xs font-semibold text-accent-600 bg-accent-50 rounded-full px-2 py-1">
            +{goal.xpReward} XP
          </span>
        </label>
      ))}
    </div>
  );
}
