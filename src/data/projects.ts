export type Project = {
  title: string;
  summary: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  imageUrl?: string;
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
    imageUrl: "/images/projects/portfolio-3d.svg",
    featured: true,
  },
  {
    title: "WHV Jobs Board",
    summary:
      "A job posting platform built specifically for working holiday visa travelers to find and post WHV-friendly roles.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "LocalStorage"],
    liveUrl: "https://whv-jobs-one.vercel.app/",
    repoUrl: "https://github.com/Nicsteg",
    imageUrl: "/images/projects/whv-jobs.svg",
    featured: true,
  },
  {
    title: "Food Bank Filter (RuneLite Plugin)",
    summary:
      "A custom RuneLite plugin that adds a bank-side panel to filter food items, compact matches into visible slots, and sort by GE price or healing value.",
    tech: ["Java", "RuneLite API", "Gradle"],
    liveUrl: "https://github.com/Nicsteg/food-bank-filter-plugin",
    repoUrl: "https://github.com/Nicsteg/food-bank-filter-plugin",
    imageUrl: "/images/projects/food-bank-filter.svg",
    featured: true,
  },
  {
    title: "Japanese Student App",
    summary:
      "A Japanese translation practice app that generates English prompts and grades Japanese answers with AI feedback.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Wanakana"],
    liveUrl: "https://github.com/Nicsteg/my-japanese-student-next",
    repoUrl: "https://github.com/Nicsteg/my-japanese-student-next",
    imageUrl: "/images/projects/japanese-student.svg",
  },
  {
    title: "Voluntree Personal",
    summary:
      "A personal continuation of a college team project for connecting volunteers with organizations and community events.",
    tech: ["Meteor", "React", "MongoDB", "Bootstrap", "Leaflet"],
    liveUrl: "https://team-octagon.github.io/",
    repoUrl: "https://github.com/Nicsteg/voluntree-personal",
    imageUrl: "/images/projects/voluntree-preview.png",
  },
  {
    title: "TheBox",
    summary:
      "A Unity 2D action/survival prototype featuring combat, harvesting, inventory management, crafting, and in-progress game systems.",
    tech: ["Unity", "C#", "URP", "2D Game Dev"],
    liveUrl: "https://github.com/Nicsteg/TheBox",
    repoUrl: "https://github.com/Nicsteg/TheBox",
  },
];
