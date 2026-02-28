import Image from "next/image";
import Script from "next/script";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);

function ProjectCard({
  title,
  summary,
  tech,
  liveUrl,
  repoUrl,
}: {
  title: string;
  summary: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
}) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.04]">
      <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3 text-sm">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90"
        >
          Live Site
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-4 py-2 font-medium text-white transition hover:border-white/50"
        >
          Code
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="text-sm font-semibold tracking-[0.2em] text-white/90">
          NICOLAS STEGER
        </a>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
        <a
          href="/resume.pdf"
          className="rounded-full border border-white/25 px-4 py-2 text-xs font-medium uppercase tracking-widest transition hover:border-white/70"
        >
          Resume
        </a>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
        <section className="pt-16 md:pt-24">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/50">Software Developer</p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                I build modern apps and polished digital products.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                I&apos;m Nicolas Steger, a developer focused on clean UI, strong performance, and
                practical solutions. Here are a few projects I&apos;ve built.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  View Projects
                </a>
                <a
                  href="mailto:nicksteger@live.com"
                  className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="profile-emblem hidden md:block" aria-hidden="true">
              <Image
                src="/images/profile.jpg"
                alt="Nicolas Steger"
                width={120}
                height={120}
                className="profile-emblem-image"
                priority
              />
            </div>
          </div>
        </section>

        <section id="projects" className="mt-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Featured</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Selected Projects</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="mt-14">
            <h3 className="text-xl font-semibold tracking-tight text-white">More Work</h3>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {projects
                .filter((project) => !project.featured)
                .map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
            </div>
          </div>
        </section>

        <section id="about" className="mt-24 grid gap-8 rounded-2xl border border-white/10 p-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Who I am</h2>
          </div>
          <p className="text-sm leading-7 text-white/75 md:text-base">
            I enjoy building web apps end-to-end, from product thinking and UI design to API
            architecture and deployment. I care about writing maintainable code and shipping work
            that solves real user problems.
          </p>
        </section>

        <section id="contact" className="mt-24 rounded-2xl border border-white/10 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Let&apos;s work together</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            Open to software engineering opportunities, freelance work, and collaborations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:nicksteger@live.com"
              className="rounded-full bg-white px-5 py-2.5 font-medium text-black transition hover:bg-white/90"
            >
              nicksteger@live.com
            </a>
            <a
              href="https://github.com/Nicsteg"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-5 py-2.5 font-medium text-white transition hover:border-white/60"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-steger-38bba7122/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-5 py-2.5 font-medium text-white transition hover:border-white/60"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
        <div className="mx-auto max-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-3">
          <div
            className="tenor-gif-embed"
            data-postid="13043798271220344810"
            data-share-method="host"
            data-aspect-ratio="1.125"
            data-width="100%"
          >
            <a href="https://tenor.com/view/cat-gif-13043798271220344810">Cat Sticker</a>
            from <a href="https://tenor.com/search/cat-stickers">Cat Stickers</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 text-xs text-white/50 md:px-10">
          <p>© {new Date().getFullYear()} Nicolas Steger. All rights reserved.</p>
          <a href="#top" className="transition hover:text-white">
            Back to top
          </a>
        </div>
      </footer>

      <Script src="https://tenor.com/embed.js" strategy="lazyOnload" />
    </div>
  );
}
