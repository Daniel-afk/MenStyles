import type { Priority, TripInfo, UserStats } from "../../types";
import { PRIORITY_LABELS } from "../../types";

interface StepReviewProps {
  stats: UserStats;
  homeCity: string;
  trip: TripInfo | null;
  priorities: Priority[];
}

export default function StepReview({ stats, homeCity, trip, priorities }: StepReviewProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Review your profile</h2>
      <p className="mt-1 text-gray-500">
        Here's what we'll use to build your personalized lifestyle plan.
      </p>

      <div className="mt-6 space-y-4">
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-500">Basics</h3>
          <dl className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <dt className="text-gray-500">Age</dt>
            <dd className="text-gray-900">{stats.age}</dd>
            <dt className="text-gray-500">Height</dt>
            <dd className="text-gray-900">{stats.heightCm} cm</dd>
            <dt className="text-gray-500">Weight</dt>
            <dd className="text-gray-900">{stats.weightKg} kg</dd>
            <dt className="text-gray-500">Annual income</dt>
            <dd className="text-gray-900">${stats.annualIncome.toLocaleString()}</dd>
          </dl>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-500">Location</h3>
          <p className="mt-2 text-sm text-gray-900">Home city: {homeCity || "Not provided"}</p>
          {trip && (
            <p className="mt-1 text-sm text-gray-900">
              Trip to {trip.destination || "TBD"}
              {trip.startDate && ` from ${trip.startDate}`}
              {trip.endDate && ` to ${trip.endDate}`}
            </p>
          )}
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-500">Priorities</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {priorities.map((p) => (
              <span
                key={p}
                className="rounded-full bg-primary-50 text-primary-700 px-3 py-1 text-sm font-medium"
              >
                {PRIORITY_LABELS[p]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
