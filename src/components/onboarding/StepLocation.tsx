import type { TripInfo } from "../../types";

interface StepLocationProps {
  homeCity: string;
  onHomeCityChange: (value: string) => void;
  trip: TripInfo | null;
  onTripChange: (value: TripInfo | null) => void;
}

const EMPTY_TRIP: TripInfo = { destination: "", startDate: "", endDate: "" };

export default function StepLocation({
  homeCity,
  onHomeCityChange,
  trip,
  onTripChange,
}: StepLocationProps) {
  const hasTrip = trip !== null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Where are you based?</h2>
      <p className="mt-1 text-gray-500">
        We'll use this to suggest ideas that fit your everyday life — and any travel plans.
      </p>

      <label className="mt-6 block">
        <span className="text-sm font-medium text-gray-700">Home city</span>
        <input
          type="text"
          value={homeCity}
          onChange={(e) => onHomeCityChange(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="e.g. Austin, TX"
        />
      </label>

      <label className="mt-6 flex items-center gap-2">
        <input
          type="checkbox"
          checked={hasTrip}
          onChange={(e) => onTripChange(e.target.checked ? EMPTY_TRIP : null)}
          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
        />
        <span className="text-sm font-medium text-gray-700">I'm planning an upcoming trip</span>
      </label>

      {hasTrip && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <label className="block sm:col-span-1">
            <span className="text-sm font-medium text-gray-700">Destination</span>
            <input
              type="text"
              value={trip?.destination ?? ""}
              onChange={(e) => onTripChange({ ...(trip ?? EMPTY_TRIP), destination: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="e.g. Denver, CO"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Start date</span>
            <input
              type="date"
              value={trip?.startDate ?? ""}
              onChange={(e) => onTripChange({ ...(trip ?? EMPTY_TRIP), startDate: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">End date</span>
            <input
              type="date"
              value={trip?.endDate ?? ""}
              onChange={(e) => onTripChange({ ...(trip ?? EMPTY_TRIP), endDate: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </label>
        </div>
      )}
    </div>
  );
}
