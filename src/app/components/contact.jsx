export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact</h2>

        <p>
          If you want to get in touch, feel free to contact me.
        </p>

        <a
          href="mailto:raulmartinalcaniz@gmail.com"
          className="contact-button"
        >
          Send me an email
        </a>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/raul-martin-alcaniz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Raulma10"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}