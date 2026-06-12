import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import MetricCard from "../components/dashboard/MetricCard";
import RoadmapChecklist from "../components/dashboard/RoadmapChecklist";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import { useAppContext } from "../context/AppContext";

const QUICK_LINKS = [
  { label: "Health", to: "/health" },
  { label: "Style", to: "/style" },
  { label: "Finance", to: "/finance" },
  { label: "Social", to: "/social" },
];

export default function Dashboard() {
  const { state, toggleRoadmapGoal } = useAppContext();
  const { archetype, xp, streak, roadmap } = state;

  if (!archetype) return null;

  const level = Math.floor(xp / 100) + 1;
  const xpIntoLevel = xp % 100;
  const completedCount = roadmap.filter((g) => g.completed).length;
  const progressPct = roadmap.length > 0 ? Math.round((completedCount / roadmap.length) * 100) : 0;

  return (
    <PageContainer>
      <p className="text-sm font-medium text-primary-600">{archetype.name}</p>
      <h1 className="mt-1 text-3xl font-bold text-gray-900">Your dashboard</h1>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <MetricCard label="Level" value={`${level}`} sublabel={`${xpIntoLevel}/100 XP to next level`} />
        <MetricCard label="Current streak" value={`${streak} day${streak === 1 ? "" : "s"}`} />
        <MetricCard label="Roadmap progress" value={`${progressPct}%`} sublabel={`${completedCount} of ${roadmap.length} goals`} />
      </div>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Your 90-day roadmap</h2>
      <p className="text-sm text-gray-500">Three goals to build momentum — check them off as you go.</p>
      <div className="mt-3">
        <RoadmapChecklist goals={roadmap} onToggle={toggleRoadmapGoal} />
      </div>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Explore your pillars</h2>
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="rounded-lg border border-gray-200 bg-white py-3 text-center font-medium text-gray-700 hover:border-primary-400 hover:text-primary-600"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Recent activity</h2>
      <div className="mt-3">
        <ActivityFeed archetypeName={archetype.name} roadmap={roadmap} />
      </div>
    </PageContainer>
  );
}
