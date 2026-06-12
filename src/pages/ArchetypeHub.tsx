import { useNavigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import StatCard from "../components/hub/StatCard";
import PillarCard from "../components/hub/PillarCard";
import { useAppContext } from "../context/AppContext";

export default function ArchetypeHub() {
  const navigate = useNavigate();
  const { state } = useAppContext();
  const { archetype, stats } = state;

  if (!archetype || !stats) return null;

  return (
    <PageContainer>
      <p className="text-sm font-medium text-primary-600">Your lifestyle archetype</p>
      <h1 className="mt-1 text-3xl font-bold text-gray-900">{archetype.name}</h1>
      <p className="mt-2 text-gray-600">{archetype.description}</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard label="Age" value={`${stats.age}`} />
        <StatCard label="Height" value={`${stats.heightCm} cm`} />
        <StatCard label="Weight" value={`${stats.weightKg} kg`} />
        <StatCard label="Annual income" value={`$${stats.annualIncome.toLocaleString()}`} />
      </div>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Your pillars</h2>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <PillarCard title="Health" teaser={archetype.pillars.health} to="/health" />
        <PillarCard title="Style" teaser={archetype.pillars.style} to="/style" />
        <PillarCard title="Finance" teaser={archetype.pillars.finance} to="/finance" />
        <PillarCard title="Social" teaser={archetype.pillars.social} to="/social" />
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="rounded-lg bg-primary-600 px-6 py-3 font-medium text-white hover:bg-primary-700"
        >
          View your 90-day roadmap
        </button>
      </div>
    </PageContainer>
  );
}
