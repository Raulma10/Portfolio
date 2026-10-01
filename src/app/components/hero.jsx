import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="/profile.jpg"
        alt="Raúl Martín"
        width={180}
        height={180}
        className="hero-photo"
        priority
      />

      <h1>
        Raúl Martín
      </h1>

      <h2>
        Backend Developer | Java & Spring Boot | REST APIs
      </h2>

      <p>
        Building secure, scalable and efficient digital solutions.
      </p>
    </section>
  );
}