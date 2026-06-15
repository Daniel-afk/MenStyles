import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <PageContainer>
      <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">{title} — Coming soon</h1>
        <p className="mt-2 text-gray-500">
          We're building out personalized {title.toLowerCase()} guidance for your archetype. Check back soon.
        </p>
        <Link
          to="/dashboard"
          className="mt-6 inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 font-medium text-white hover:bg-primary-700"
        >
          Back to dashboard
        </Link>
      </div>
    </PageContainer>
  );
}
