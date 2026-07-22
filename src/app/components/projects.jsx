const projects = [
    {
        title: "Portfolio",
        description:
        "Personal portfolio created to showcase my projects, skills and experience as a software developer.",
        technologies: ["Next.js", "React", "CSS"],
        github: "https://github.com/Raulma10/portfolio",
    },
    {
    title: "Peluquería",
    description:
            "Web application for a hair salon, developed with Java and Spring Boot. The project includes a web interface and backend functionality.",
    technologies: ["Java", "Spring Boot", "HTML", "CSS"],
    github: "https://github.com/Raulma10/Peluqueria",
    },
    {
    title: "Películas",
    description:
        "Web application developed with Java and Spring Boot for managing and displaying movie-related information.",
    technologies: ["Java", "Spring Boot", "HTML", "CSS"],
    github: "https://github.com/Raulma10/Peliculas",
    },
];

export default function Projects() {
    return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <p className="projects-subtitle">What I have built</p>

          <h2>Projects</h2>

          <p className="projects-description">
            Here are some of the projects I have worked on while developing my
            skills as a software developer.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <span className="project-icon">&lt;/&gt;</span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  ↗
                </a>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}