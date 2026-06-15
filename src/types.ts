export type Priority =
  | "Career"
  | "Fitness"
  | "Style"
  | "Finance"
  | "Social"
  | "Hobbies";

export const PRIORITY_LABELS: Record<Priority, string> = {
  Career: "Career",
  Fitness: "Fitness",
  Style: "Style",
  Finance: "Finance",
  Social: "Social life",
  Hobbies: "Hobbies & reading",
};

export interface UserStats {
  age: number;
  heightCm: number;
  weightKg: number;
  annualIncome: number;
}

export interface TripInfo {
  destination: string;
  startDate: string;
  endDate: string;
}

export type RoadmapGoalId = "fitness" | "style" | "social";

export interface RoadmapGoal {
  id: RoadmapGoalId;
  title: string;
  description: string;
  completed: boolean;
  xpReward: number;
}

export interface ArchetypePillars {
  health: string;
  style: string;
  finance: string;
  social: string;
}

export interface Archetype {
  id: string;
  name: string;
  description: string;
  pillars: ArchetypePillars;
}

export interface AppState {
  stats: UserStats | null;
  homeCity: string;
  trip: TripInfo | null;
  priorities: Priority[];
  archetype: Archetype | null;
  xp: number;
  streak: number;
  roadmap: RoadmapGoal[];
}

export const DEFAULT_STATE: AppState = {
  stats: null,
  homeCity: "",
  trip: null,
  priorities: [],
  archetype: null,
  xp: 0,
  streak: 0,
  roadmap: [],
};
