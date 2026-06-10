import Reveal from './Reveal';

const pastelTags = [
  'bg-pastel-blue-bg text-pastel-blue-text',
  'bg-pastel-green-bg text-pastel-green-text',
  'bg-pastel-yellow-bg text-pastel-yellow-text',
  'bg-pastel-red-bg text-pastel-red-text',
];

const Experience = ({ experiences = [] }) => {
  if (!experiences.length) {
    return <p className="text-muted italic">Experience details coming soon.</p>;
  }

  return (
    <ol className="relative space-y-0">
      {experiences.map((exp, index) => (
        <Reveal key={`${exp.company}-${exp.date}`} delay={index * 50}>
          <li className="experience-row grid gap-6 border-b border-border py-10 md:grid-cols-[12rem_1fr] md:gap-12 md:py-12">
            <div>
              <time className="font-mono text-xs text-muted">{exp.date}</time>
              {exp.location && (
                <p className="mt-1 text-xs text-muted">{exp.location}</p>
              )}
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-serif text-xl tracking-tight text-ink">
                  {exp.title}
                </h3>
                <span className="text-sm text-muted">at {exp.company}</span>
              </div>

              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <ul className="mt-5 max-w-prose space-y-3 text-sm leading-relaxed text-muted">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.tags && exp.tags.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {exp.tags.map((tag, tagIndex) => (
                    <li
                      key={tag}
                      className={`tag ${pastelTags[tagIndex % pastelTags.length]}`}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
};

export default Experience;
