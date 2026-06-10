import Reveal from './Reveal';

const Contact = () => (
  <section id="contact" className="border-t border-border bg-bone py-24 md:py-32">
    <div className="mx-auto max-w-content px-6 md:px-10">
      <Reveal>
        <p className="section-label mb-4">Contact</p>
        <h2 className="max-w-2xl font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-tight tracking-[-0.02em] text-ink text-balance">
          Open to software engineering roles where craft and impact matter.
        </h2>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-muted">
          Whether you are hiring for frontend, full-stack, or quality-focused engineering —
          I would like to hear about the team and the problems you are solving.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="mailto:jlo10@illinois.edu" className="btn-primary">
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/lo-josephine/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/josephine-lo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-10 font-mono text-xs text-muted">
          jlo10@illinois.edu
        </p>
      </Reveal>
    </div>
  </section>
);

export default Contact;
