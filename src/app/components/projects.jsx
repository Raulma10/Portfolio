const projects = [
  {
    title: "Personal Training App",
    description:
        "REST API for managing personal training clients, built with Java and Spring Boot following hexagonal architecture (ports & adapters). Handles memberships, fees, workout routines and 1:1 training session bookings, with PostgreSQL persistence and Docker-based deployment.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    github: "https://github.com/Raulma10/gym-manager",
    inProgress: true,
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
  {
    title: "Inventory Management App",
    description:
    "Web application for managing product inventory, built with React and JavaScript. Allows users to view, add and update products through a REST API, using reusable components and CRUD operations.",
    technologies: ["React", "JavaScript", "Node.js", "REST API"],
    github: "https://github.com/Raulma10/Inventario-app",
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

              {project.inProgress && (
                <span className="project-status">In Progress</span>
              )}
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
