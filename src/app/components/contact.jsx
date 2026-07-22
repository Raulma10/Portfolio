export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 mb-8">
          If you want to get in touch, feel free to contact me.
        </p>

        <a
          href="mailto:raulmartinalcaniz@gmail.com"
          className="inline-block px-6 py-3 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition"
        >
          Send me an email
        </a>
      </div>
    </section>
  );
}