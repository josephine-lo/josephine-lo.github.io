import Reveal from './Reveal';

const Hero = ({ portrait }) => (
  <section
    id="top"
    className="hero-ambient relative min-h-[90dvh] border-b border-border pt-28 pb-20 md:pt-36 md:pb-28"
  >
    <div className="mx-auto grid max-w-content items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-10">
      <Reveal>
        <p className="section-label mb-6">Software engineer</p>
        <h1 className="font-serif text-[clamp(2.75rem,7vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink text-balance">
          Building software that's reliable, thoughtful, and user-focused.
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-muted">
          <span className="text-ink">Josephine Lo</span> — I work across the stack, specializing in frontend systems, API integrations, and software quality. I enjoy turning complex problems into intuitive, reliable experiences.

        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="btn-primary">
            View selected work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </div>
      </Reveal>

      <Reveal delay={80} className="flex justify-center md:justify-end">
        <figure className="relative w-full max-w-sm">
          <div className="image-reveal rounded-lg border border-border bg-surface">
            <img
              src={portrait}
              alt="Portrait of Josephine Lo"
              className="aspect-[4/5] w-full object-cover"
              width={400}
              height={500}
            />
          </div>
          <figcaption className="mt-4 font-mono text-xs text-muted">
            UIUC · MCS · Dec 2025
          </figcaption>
        </figure>
      </Reveal>
    </div>
  </section>
);

export default Hero;
