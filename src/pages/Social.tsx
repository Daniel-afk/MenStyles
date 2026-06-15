import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import { useAppContext } from "../context/AppContext";
import { getSocialContent } from "../lib/socialContent";

export default function Social() {
  const { state, toggleRoadmapGoal } = useAppContext();
  const { archetype, roadmap } = state;

  if (!archetype) return null;

  const content = getSocialContent(archetype.id);
  const socialGoal = roadmap.find((goal) => goal.id === "social");

  return (
    <PageContainer>
      <Link to="/dashboard" className="text-sm font-medium text-primary-600 hover:text-primary-700">
        &larr; Back to dashboard
      </Link>

      <p className="mt-4 text-sm font-medium text-primary-600">{archetype.name}</p>
      <h1 className="mt-1 text-3xl font-bold text-gray-900">Social</h1>
      <p className="mt-2 text-gray-600">{content.intro}</p>

      {socialGoal && (
        <div className="mt-6 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-500">Your roadmap goal</h2>
          <div className="mt-2 flex items-start gap-3">
            <input
              type="checkbox"
              checked={socialGoal.completed}
              onChange={() => toggleRoadmapGoal("social")}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <div className="flex-1">
              <p
                className={`font-medium ${
                  socialGoal.completed ? "text-gray-400 line-through" : "text-gray-900"
                }`}
              >
                {socialGoal.title}
              </p>
              <p className="text-sm text-gray-500">{socialGoal.description}</p>
            </div>
            <span className="text-xs font-semibold text-accent-600 bg-accent-50 rounded-full px-2 py-1">
              +{socialGoal.xpReward} XP
            </span>
          </div>
        </div>
      )}

      <h2 className="mt-8 text-xl font-bold text-gray-900">Ideas to try</h2>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {content.ideas.map((idea) => (
          <div key={idea.title} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900">{idea.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{idea.description}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Other pillars</h2>
      <div className="mt-3 grid grid-cols-3 gap-3">
        <Link
          to="/health"
          className="rounded-lg border border-gray-200 bg-white py-3 text-center font-medium text-gray-700 hover:border-primary-400 hover:text-primary-600"
        >
          Health
        </Link>
        <Link
          to="/style"
          className="rounded-lg border border-gray-200 bg-white py-3 text-center font-medium text-gray-700 hover:border-primary-400 hover:text-primary-600"
        >
          Style
        </Link>
        <Link
          to="/finance"
          className="rounded-lg border border-gray-200 bg-white py-3 text-center font-medium text-gray-700 hover:border-primary-400 hover:text-primary-600"
        >
          Finance
        </Link>
      </div>
    </PageContainer>
  );
}
