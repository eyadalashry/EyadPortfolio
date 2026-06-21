export type Project = {
  slug: string;
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  techStack: string[];
  duration: string;
  year: string;
  role: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
};

export const projects: Project[] = [
  {
    slug: "hook-heavy-reel",
    id: "hook-heavy-reel",
    title: "Hook-Heavy Reel",
    client: "Format Breakdown",
    category: "Reel Edit",
    description:
      "First-3-seconds hooks, pattern interrupts, and cuts built to stop the scroll.",
    techStack: ["Premiere Pro", "After Effects"],
    duration: "00:00:00:24",
    year: "2026",
    role: "Editor",
    summary:
      "A short-form reel built around one rule: if it doesn't earn the first second, nothing after it matters. Built for creators who need the hook to do the heavy lifting.",
    challenge:
      "Most reels lose viewers in the first second. The brief was a sub-30-second edit that front-loads tension and never lets the pacing relax.",
    approach:
      "Opened on the most visually surprising frame in the raw footage instead of the chronological start. Cut on hard beats every 0.5-1.5 seconds through the hook, then let pacing breathe once retention was secured.",
    result:
      "Used as the reference cut for hook-first pacing across future client reels.",
  },
  {
    slug: "ugc-ad-edit",
    id: "ugc-ad-edit",
    title: "UGC Ad Edit",
    client: "Format Breakdown",
    category: "Paid Social",
    description:
      "Native-feeling UGC ad edit with on-screen captions and a direct-response CTA.",
    techStack: ["Premiere Pro", "After Effects"],
    duration: "00:00:00:32",
    year: "2026",
    role: "Editor",
    summary:
      "A UGC-style ad cut to feel like an organic recommendation, not a commercial — built for paid placement on Instagram and TikTok feeds.",
    challenge:
      "Performance ads die the moment they look like ads. The cut needed direct-response structure (hook, problem, solution, CTA) while staying visually indistinguishable from a regular post.",
    approach:
      "Kept the raw, handheld camera feel intact, added punch-in zooms on key claims, and synced animated caption styling to match what's currently performing on the platform.",
    result:
      "Built as a swipeable reference for brands running UGC-style paid campaigns.",
  },
  {
    slug: "podcast-clip",
    id: "podcast-clip",
    title: "Talking-Head Podcast Clip",
    client: "Format Breakdown",
    category: "Podcast Clip",
    description:
      "Long-form podcast moment cut into a vertical, caption-driven highlight clip.",
    techStack: ["Premiere Pro", "After Effects"],
    duration: "00:00:00:45",
    year: "2026",
    role: "Editor",
    summary:
      "A single strong moment pulled from a long-form podcast and reframed vertically, with dynamic captions and b-roll cutaways to hold attention through a talking-head format.",
    challenge:
      "Talking-head footage has no built-in motion to hold attention. The edit needed visual variety without distracting from what's actually being said.",
    approach:
      "Reframed to 9:16 around the speaker, added animated word-by-word captions timed to speech, and cut in b-roll and zoom punches on the clip's strongest lines.",
    result:
      "Template approach now reused across ongoing podcast clipping work.",
  },
  {
    slug: "storytime-edit",
    id: "storytime-edit",
    title: "Storytime Edit",
    client: "Format Breakdown",
    category: "Narrative Story",
    description:
      "Narrative voiceover reel paced around a story arc, not a product pitch.",
    techStack: ["Premiere Pro", "After Effects"],
    duration: "00:00:00:58",
    year: "2026",
    role: "Editor",
    summary:
      "A storytime-format reel built around narrative tension — setup, escalation, payoff — using b-roll, sound design, and caption pacing to keep a voiceover-driven story watchable end to end.",
    challenge:
      "Storytime content lives or dies on pacing the reveal. The cut needed to withhold just enough to keep viewers watching for the payoff.",
    approach:
      "Mapped the voiceover's story beats first, then selected b-roll and sound design to land each beat without ever literally illustrating the words being said.",
    result:
      "Completed watch-through rate held well above the account's format average.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
