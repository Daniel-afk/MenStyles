import { Link } from "react-router-dom";

interface PillarCardProps {
  title: string;
  teaser: string;
  to: string;
}

export default function PillarCard({ title, teaser, to }: PillarCardProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600 flex-1">{teaser}</p>
      <Link
        to={to}
        className="mt-3 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
      >
        Explore &rarr;
      </Link>
    </div>
  );
}
