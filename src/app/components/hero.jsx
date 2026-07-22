export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <p className="text-green-400 mb-4 glow">
        {"> Initializing portfolio..."}
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Raul Martin
      </h1>

      <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6">
        Software Developer | Cybersecurity | Cloud
      </h2>

      <p className="max-w-2xl text-gray-300">
        Building secure, scalable and efficient digital solutions.
      </p>
    </section>
  );
}