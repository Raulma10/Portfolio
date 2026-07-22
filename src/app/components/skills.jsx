const skills = [
  "Java",
  "Spring Boot",
  "SQL",
  "JPA",
  "Spring Security",
  "Docker",
  "Git",
  "React",
  "Next.js",
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Tech Stack</h2>

        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}