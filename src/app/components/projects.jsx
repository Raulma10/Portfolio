const projects = [
  {
    title: "Portfolio",
    description:
      "Personal portfolio created to showcase my projects, skills and experience as a software developer.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Raulma10/portfolio",
  },
  {
    title: "Project 2",
    description:
      "Description of the project and the main functionality developed.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    github: "#",
  },
  {
    title: "Project 3",
    description:
      "Description of the project and the main technologies used.",
    technologies: ["Java", "Spring Boot", "Docker"],
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-slate-800 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-slate-700 px-3 py-1 rounded text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}