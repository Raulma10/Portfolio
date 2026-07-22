const skills = [
  "Java",
  "Spring Boot",
  "Python",
  "React",
  "Next.js",
  "AWS",
  "Docker",
  "Linux",
];

export default function Skills() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">Tech Stack</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-green-400 px-5 py-3 rounded-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}