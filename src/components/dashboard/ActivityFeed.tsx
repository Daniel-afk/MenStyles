import type { RoadmapGoal } from "../../types";

interface ActivityFeedProps {
  archetypeName: string;
  roadmap: RoadmapGoal[];
}

export default function ActivityFeed({ archetypeName, roadmap }: ActivityFeedProps) {
  const completedEntries = roadmap
    .filter((goal) => goal.completed)
    .map((goal) => ({
      text: `Completed: ${goal.title}`,
      xp: goal.xpReward,
    }));

  const entries = [
    ...completedEntries,
    { text: `Archetype assigned: ${archetypeName}`, xp: null },
    { text: "Profile created", xp: null },
  ];

  return (
    <div className="rounded-xl border border-gray-100 bg-white shadow-sm divide-y divide-gray-100">
      {entries.map((entry, i) => (
        <div key={i} className="flex items-center justify-between p-4">
          <p className="text-sm text-gray-700">{entry.text}</p>
          {entry.xp !== null && (
            <span className="text-xs font-semibold text-accent-600 bg-accent-50 rounded-full px-2 py-1">
              +{entry.xp} XP
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
