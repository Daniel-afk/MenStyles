export interface SocialIdea {
  title: string;
  description: string;
}

export interface SocialContent {
  intro: string;
  ideas: SocialIdea[];
}

export const SOCIAL_CONTENT: Record<string, SocialContent> = {
  balanced: {
    intro:
      "Staying connected doesn't have to be a big production. A few easy, low-pressure habits go a long way toward keeping your relationships strong.",
    ideas: [
      {
        title: "Set a weekly check-in reminder",
        description: "Pick one person to message each week — keep it short and casual.",
      },
      {
        title: "Turn errands into hangouts",
        description: "Invite a friend along for a walk, workout, or coffee run you're already doing.",
      },
      {
        title: "Say yes to one new thing this month",
        description: "A class, meetup, or event you wouldn't normally try — low stakes, new faces.",
      },
    ],
  },
  adventurer: {
    intro:
      "Your social life thrives on shared experiences. The more people you bring along for the ride, the more momentum you build — for you and for them.",
    ideas: [
      {
        title: "Invite someone on your next outing",
        description: "A hike, ride, or trip is more fun (and often safer) with a partner.",
      },
      {
        title: "Join a local activity group",
        description: "Find a running club, climbing gym, or pickup game near you to meet like-minded people.",
      },
      {
        title: "Plan a low-key group trip",
        description: "Even a day trip with friends builds memories and keeps your circle close.",
      },
    ],
  },
  climber: {
    intro:
      "Your network is one of your biggest assets. A little consistency — short, genuine touchpoints — keeps it warm without taking over your calendar.",
    ideas: [
      {
        title: "Reconnect with one contact this week",
        description: "A quick message congratulating someone or checking in goes a long way.",
      },
      {
        title: "Attend one industry event this month",
        description: "Pick one that fits your schedule — quality over quantity.",
      },
      {
        title: "Set up a recurring coffee or call",
        description: "A standing monthly catch-up with a mentor or peer keeps relationships active.",
      },
    ],
  },
  connector: {
    intro:
      "You're at your best around people — so lean into it. A little planning turns your calendar into a steady stream of moments worth showing up for.",
    ideas: [
      {
        title: "Host a low-key get-together",
        description: "Doesn't need to be fancy — a game night or dinner at home counts.",
      },
      {
        title: "Start a recurring group hangout",
        description: "A monthly standing plan makes it easier for everyone to show up.",
      },
      {
        title: "Introduce two friends who'd get along",
        description: "Growing your circle is easier when you connect the people already in it.",
      },
    ],
  },
};

export function getSocialContent(archetypeId: string): SocialContent {
  return SOCIAL_CONTENT[archetypeId] ?? SOCIAL_CONTENT.balanced;
}
