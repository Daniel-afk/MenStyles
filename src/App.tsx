import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import ArchetypeHub from "./pages/ArchetypeHub";
import Dashboard from "./pages/Dashboard";
import ComingSoon from "./pages/ComingSoon";
import { useAppContext } from "./context/AppContext";

function RequireArchetype({ children }: { children: ReactNode }) {
  const { state } = useAppContext();
  if (!state.archetype) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route
        path="/result"
        element={
          <RequireArchetype>
            <ArchetypeHub />
          </RequireArchetype>
        }
      />
      <Route
        path="/dashboard"
        element={
          <RequireArchetype>
            <Dashboard />
          </RequireArchetype>
        }
      />
      <Route path="/health" element={<ComingSoon title="Health" />} />
      <Route path="/style" element={<ComingSoon title="Style" />} />
      <Route path="/finance" element={<ComingSoon title="Finance" />} />
      <Route path="/social" element={<ComingSoon title="Social" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
