import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { generateArchetype, generateRoadmap } from "../lib/archetypes";
import { loadState, saveState } from "../lib/storage";
import type { AppState, Priority, RoadmapGoalId, TripInfo, UserStats } from "../types";

interface AppContextValue {
  state: AppState;
  completeOnboarding: (
    stats: UserStats,
    homeCity: string,
    trip: TripInfo | null,
    priorities: Priority[]
  ) => void;
  toggleRoadmapGoal: (id: RoadmapGoalId) => void;
  resetProfile: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(() => loadState());

  useEffect(() => {
    saveState(state);
  }, [state]);

  const completeOnboarding: AppContextValue["completeOnboarding"] = (
    stats,
    homeCity,
    trip,
    priorities
  ) => {
    const archetype = generateArchetype(stats, priorities, trip);
    const roadmap = generateRoadmap(archetype);
    setState({
      stats,
      homeCity,
      trip,
      priorities,
      archetype,
      xp: 0,
      streak: 1,
      roadmap,
    });
  };

  const toggleRoadmapGoal: AppContextValue["toggleRoadmapGoal"] = (id) => {
    setState((prev) => {
      const roadmap = prev.roadmap.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      );
      const goal = prev.roadmap.find((g) => g.id === id);
      const xpDelta = goal ? (goal.completed ? -goal.xpReward : goal.xpReward) : 0;
      return { ...prev, roadmap, xp: Math.max(0, prev.xp + xpDelta) };
    });
  };

  const resetProfile = () => {
    setState({
      stats: null,
      homeCity: "",
      trip: null,
      priorities: [],
      archetype: null,
      xp: 0,
      streak: 0,
      roadmap: [],
    });
  };

  return (
    <AppContext.Provider value={{ state, completeOnboarding, toggleRoadmapGoal, resetProfile }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return ctx;
}
