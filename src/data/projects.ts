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
    title: "Project Template 01",
    summary:
      "Short summary of your project goes here. Highlight the core problem and what you built.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-template-01",
    featured: true,
  },
  {
    title: "Project Template 02",
    summary:
      "Short summary of your project goes here. Mention key features and user impact.",
    tech: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-template-02",
    featured: true,
  },
  {
    title: "Project Template 03",
    summary:
      "Short summary of your project goes here. Keep it concise and results-focused.",
    tech: ["Next.js", "Prisma", "Vercel"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-template-03",
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
