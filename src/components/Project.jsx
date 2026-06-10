import Reveal from './Reveal';

const pastelTags = [
  'bg-pastel-blue-bg text-pastel-blue-text',
  'bg-pastel-green-bg text-pastel-green-text',
  'bg-pastel-yellow-bg text-pastel-yellow-text',
  'bg-pastel-red-bg text-pastel-red-text',
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <Reveal delay={index * 60}>
      <article className="card project-card overflow-hidden">
        <div
          className={`grid md:grid-cols-2 ${
            isEven ? '' : 'md:[&>*:first-child]:order-2'
          }`}
        >
          {project.image && (
            <div className="project-image-wrap border-b border-border bg-bone md:border-b-0 md:border-r md:border-border">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="project-image"
                loading="lazy"
              />
            </div>
          )}

          <div className="flex flex-col justify-between p-6 md:p-10">
            <div>
              <p className="section-label mb-3">Case study</p>
              <h3 className="font-serif text-2xl tracking-tight text-ink transition-colors duration-200 md:text-3xl">
                {project.title}
              </h3>

              {project.role && (
                <p className="mt-2 font-mono text-xs text-muted">{project.role}</p>
              )}

              {project.problem && (
                <div className="mt-6">
                  <p className="section-label mb-2">Problem</p>
                  <p className="text-sm leading-relaxed text-muted">{project.problem}</p>
                </div>
              )}

              {project.outcome && (
                <div className="mt-5">
                  <p className="section-label mb-2">Outcome</p>
                  <p className="text-sm leading-relaxed text-ink">{project.outcome}</p>
                </div>
              )}

              {project.description && !project.problem && (
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              )}

              {project.tags && project.tags.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.tags.map((tag, tagIndex) => (
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

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link mt-8"
              >
                View repository
                <svg
                  className="text-link-icon"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 11L11 3M11 3H5M11 3V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

const Projects = ({ projects = [] }) => {
  if (!projects.length) {
    return (
      <p className="text-muted italic">Selected work coming soon.</p>
    );
  }

  return (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
};

export default Projects;
