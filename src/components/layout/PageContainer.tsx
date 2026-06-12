import type { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-8">{children}</div>
    </div>
  );
}
