import Reveal from './Reveal';

const expertise = [
  {
    title: 'Frontend & product UI',
    description:
      'Dynamic interfaces with React and modern tooling — from LLM-assisted UIs to responsive mobile layouts.',
    tag: 'React',
    tagStyle: 'bg-pastel-blue-bg text-pastel-blue-text',
  },
  {
    title: 'Full-stack delivery',
    description:
      'RESTful API integration, backend services, and end-to-end features shipped with clear ownership.',
    tag: 'Full stack',
    tagStyle: 'bg-pastel-green-bg text-pastel-green-text',
  },
  {
    title: 'Quality & rigor',
    description:
      'Test-driven development, data parsing pipelines, and automation that keeps systems dependable.',
    tag: 'TDD',
    tagStyle: 'bg-pastel-yellow-bg text-pastel-yellow-text',
  },
];

const About = () => (
  <section id="about" className="border-b border-border py-24 md:py-32">
    <div className="mx-auto max-w-content px-6 md:px-10">
      <Reveal>
        <p className="section-label mb-4">About</p>
        <h2 className="max-w-3xl font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-tight tracking-[-0.02em] text-ink text-balance">
          Engineer with a bias for clarity, craft, and measurable impact.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal delay={60}>
          <div className="max-w-prose space-y-6 text-base leading-relaxed text-muted">
            <p>
              I hold a Master&apos;s of Computer Science from the{' '}
              <span className="text-ink">University of Illinois, Urbana-Champaign</span>{' '}
              and a B.S. in Computer Science from Santa Clara University with an emphasis
              in software.
            </p>
            <p>
              My work spans frontend development, full-stack systems, and software testing.
              I care about interfaces that feel considered, codebases that are maintainable,
              and features that solve real problems for real users.
            </p>
            <p>
              Outside of engineering, I draw and walk my chihuahua — both keep me observant
              and patient, qualities I bring back to the codebase.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="card card-interactive space-y-6">
            <div>
              <dt className="section-label mb-1">Master's of Computer Science</dt>
              <dd className="text-ink">University of Illinois at Urbana-Champaign</dd>
            </div>
            <div>
              <dt className="section-label mb-1">Bachelor's of Science (CS)</dt>
              <dd className="text-ink">Santa Clara University</dd>
            </div>
            <div>
              <dt className="section-label mb-1">Emphasis</dt>
              <dd className="text-ink">Software</dd>
            </div>
            <div>
              <dt className="section-label mb-1">Graduated</dt>
              <dd className="font-mono text-sm text-ink">December 2025</dd>
            </div>
          </dl>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {expertise.map((item, index) => (
          <Reveal key={item.title} delay={index * 60}>
            <article className="card card-interactive h-full">
              <span className={`tag ${item.tagStyle}`}>{item.tag}</span>
              <h3 className="mt-4 font-serif text-xl tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;
