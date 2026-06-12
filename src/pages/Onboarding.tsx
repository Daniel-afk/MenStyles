import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import ProgressIndicator from "../components/layout/ProgressIndicator";
import StepStats from "../components/onboarding/StepStats";
import StepLocation from "../components/onboarding/StepLocation";
import StepPriorities from "../components/onboarding/StepPriorities";
import StepReview from "../components/onboarding/StepReview";
import { useAppContext } from "../context/AppContext";
import type { Priority, TripInfo, UserStats } from "../types";

const STEP_LABELS = ["Basics", "Location", "Priorities", "Review"];

const EMPTY_STATS: UserStats = { age: 0, heightCm: 0, weightKg: 0, annualIncome: 0 };

export default function Onboarding() {
  const navigate = useNavigate();
  const { completeOnboarding } = useAppContext();

  const [step, setStep] = useState(1);
  const [stats, setStats] = useState<UserStats>(EMPTY_STATS);
  const [homeCity, setHomeCity] = useState("");
  const [trip, setTrip] = useState<TripInfo | null>(null);
  const [priorities, setPriorities] = useState<Priority[]>([]);

  const isStepValid = (): boolean => {
    if (step === 1) {
      return stats.age > 0 && stats.heightCm > 0 && stats.weightKg > 0 && stats.annualIncome >= 0;
    }
    if (step === 2) {
      return homeCity.trim().length > 0;
    }
    if (step === 3) {
      return priorities.length >= 2 && priorities.length <= 3;
    }
    return true;
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      completeOnboarding(stats, homeCity, trip, priorities);
      navigate("/result");
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-gray-900 mb-1">MenStyles</h1>
      <p className="text-gray-500 mb-6">Let's build a lifestyle plan that fits you.</p>

      <ProgressIndicator current={step} total={4} labels={STEP_LABELS} />

      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        {step === 1 && <StepStats value={stats} onChange={setStats} />}
        {step === 2 && (
          <StepLocation
            homeCity={homeCity}
            onHomeCityChange={setHomeCity}
            trip={trip}
            onTripChange={setTrip}
          />
        )}
        {step === 3 && <StepPriorities value={priorities} onChange={setPriorities} />}
        {step === 4 && (
          <StepReview stats={stats} homeCity={homeCity} trip={trip} priorities={priorities} />
        )}
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 1}
          className="rounded-lg px-4 py-2 font-medium text-gray-700 border border-gray-300 disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!isStepValid()}
          className="rounded-lg bg-primary-600 px-4 py-2 font-medium text-white hover:bg-primary-700 disabled:opacity-50"
        >
          {step === 4 ? "Generate my profile" : "Next"}
        </button>
      </div>
    </PageContainer>
  );
}
