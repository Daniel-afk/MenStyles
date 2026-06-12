import type { Archetype, Priority, RoadmapGoal, TripInfo, UserStats } from "../types";

const ARCHETYPES: Record<string, Archetype> = {
  balanced: {
    id: "balanced",
    name: "Balanced Builder",
    description:
      "You're focused on steady, sustainable progress across the board. Small, consistent habits compound into real momentum over time.",
    pillars: {
      health: "Small consistent habits that fit your schedule, not someone else's.",
      style: "A versatile everyday wardrobe that works as hard as you do.",
      finance: "Simple systems to grow your savings without overthinking it.",
      social: "Easy ways to stay connected without it feeling like a chore.",
    },
  },
  adventurer: {
    id: "adventurer",
    name: "Outdoor Adventurer",
    description:
      "You're happiest when you're moving, exploring, and pushing your limits. Your goals are about building the strength and stamina to keep adventuring.",
    pillars: {
      health: "Build strength and stamina for the trips and activities you love.",
      style: "Gear and looks that move with you, from the trail to the table.",
      finance: "Budget smart now so your next trip is already funded.",
      social: "Find your crew for the next hike, ride, or weekend away.",
    },
  },
  climber: {
    id: "climber",
    name: "Career-Focused Climber",
    description:
      "You're driving toward your next big opportunity. Your goals are about showing up sharp, focused, and ready for the rooms you want to be in.",
    pillars: {
      health: "Energy-first routines that fit around a packed calendar.",
      style: "Sharpen your look for the rooms you want to be in — efficient, polished, repeatable.",
      finance: "Turn your income growth into long-term wealth, on autopilot.",
      social: "Build a network that opens doors, a little at a time.",
    },
  },
  connector: {
    id: "connector",
    name: "Social Connector",
    description:
      "You're energized by people and experiences. Your goals are about showing up more often, with more confidence, in the moments that matter.",
    pillars: {
      health: "Stay energized for the nights out and the mornings after.",
      style: "Looks that help you feel confident walking into any room.",
      finance: "Enjoy your social life while still building toward your goals.",
      social: "Turn your calendar into a network — low-pressure ways to show up more.",
    },
  },
};

export function generateArchetype(
  stats: UserStats,
  priorities: Priority[],
  trip: TripInfo | null
): Archetype {
  const scores: Record<string, number> = {
    balanced: 0,
    adventurer: 0,
    climber: 0,
    connector: 0,
  };

  if (priorities.includes("Career") || priorities.includes("Finance")) {
    scores.climber += 2;
  }
  if (priorities.includes("Fitness")) {
    scores.adventurer += 2;
  }
  if (priorities.includes("Social")) {
    scores.connector += 2;
  }
  if (priorities.includes("Style")) {
    scores.climber += 1;
    scores.connector += 1;
  }
  if (priorities.includes("Hobbies")) {
    scores.adventurer += 1;
    scores.balanced += 1;
  }

  if (trip) {
    scores.adventurer += 2;
  }

  if (stats.annualIncome >= 90000) {
    scores.climber += 1;
  }

  if (priorities.length === 3 && new Set(priorities).size === 3 && scores.balanced === 0) {
    scores.balanced += 1;
  }

  const order = ["balanced", "adventurer", "climber", "connector"] as const;
  let best: string = order[0];
  for (const key of order) {
    if (scores[key] > scores[best]) {
      best = key;
    }
  }

  return ARCHETYPES[best];
}

export function generateRoadmap(archetype: Archetype): RoadmapGoal[] {
  const roadmaps: Record<string, RoadmapGoal[]> = {
    balanced: [
      {
        id: "fitness",
        title: "Take a 20-minute walk, 3 times this week",
        description: "An easy way to build momentum without overhauling your schedule.",
        completed: false,
        xpReward: 20,
      },
      {
        id: "style",
        title: "Build a simple 5-piece capsule outfit",
        description: "Pick pieces that mix and match so getting dressed is one less decision.",
        completed: false,
        xpReward: 20,
      },
      {
        id: "social",
        title: "Reach out to one friend you haven't talked to in a while",
        description: "A quick message can be the start of reconnecting.",
        completed: false,
        xpReward: 20,
      },
    ],
    adventurer: [
      {
        id: "fitness",
        title: "Do a strength or cardio session built for your next trip",
        description: "Train for the activities you're excited about, not someone else's routine.",
        completed: false,
        xpReward: 25,
      },
      {
        id: "style",
        title: "Put together a go-anywhere travel outfit",
        description: "Comfortable, durable, and ready for wherever you end up.",
        completed: false,
        xpReward: 20,
      },
      {
        id: "social",
        title: "Invite someone to join your next outdoor adventure",
        description: "Adventures are better (and safer) with company.",
        completed: false,
        xpReward: 20,
      },
    ],
    climber: [
      {
        id: "fitness",
        title: "Schedule 3 short energy-boosting workouts this week",
        description: "Quick sessions that fit around meetings and keep you sharp.",
        completed: false,
        xpReward: 20,
      },
      {
        id: "style",
        title: "Upgrade one wardrobe staple for a polished look",
        description: "A small investment that pays off every time you walk into a room.",
        completed: false,
        xpReward: 25,
      },
      {
        id: "social",
        title: "Reconnect with one professional contact",
        description: "A short message keeps your network warm for when it matters.",
        completed: false,
        xpReward: 20,
      },
    ],
    connector: [
      {
        id: "fitness",
        title: "Build a routine that keeps your energy up for late nights",
        description: "Feel good for the moments that matter most to you.",
        completed: false,
        xpReward: 20,
      },
      {
        id: "style",
        title: "Put together a go-to outfit for nights out",
        description: "One reliable look that makes you feel confident, ready when you need it.",
        completed: false,
        xpReward: 20,
      },
      {
        id: "social",
        title: "Plan a get-together with your group this month",
        description: "Be the one who brings people together.",
        completed: false,
        xpReward: 25,
      },
    ],
  };

  return roadmaps[archetype.id] ?? roadmaps.balanced;
}
