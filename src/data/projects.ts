export type Project = {
  title: string;
  summary: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "3D Portfolio",
    summary:
      "An immersive portfolio experience with a 3D presentation of projects and personal brand.",
    tech: ["React", "Vite", "WebGL"],
    liveUrl: "https://steg-portfolio.netlify.app/",
    repoUrl: "https://github.com/Nicsteg",
    featured: true,
  },
  {
    title: "WHV Jobs Board",
    summary:
      "A job posting platform built specifically for working holiday visa travelers to find and post WHV-friendly roles.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "LocalStorage"],
    liveUrl: "https://whv-jobs-one.vercel.app/",
    repoUrl: "https://github.com/Nicsteg",
    featured: true,
  },
  {
    title: "Food Bank Filter (RuneLite Plugin)",
    summary:
      "A custom RuneLite plugin that adds a bank-side panel to filter food items, compact matches into visible slots, and sort by GE price or healing value.",
    tech: ["Java", "RuneLite API", "Gradle"],
    liveUrl: "https://github.com/Nicsteg/food-bank-filter-plugin",
    repoUrl: "https://github.com/Nicsteg/food-bank-filter-plugin",
    featured: true,
  },
  {
    title: "Project Template 04",
    summary:
      "Use this card for another project. Add the stack and links when ready.",
    tech: ["React", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-template-04",
  },
  {
    title: "Project Template 05",
    summary:
      "Use this card for another project. Briefly explain what makes it valuable.",
    tech: ["Vue", "Firebase", "Tailwind"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-template-05",
  },
  {
    title: "Project Template 06",
    summary:
      "Use this card for another project. Include outcomes or measurable improvements.",
    tech: ["Svelte", "Supabase", "TypeScript"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-template-06",
  },
];
