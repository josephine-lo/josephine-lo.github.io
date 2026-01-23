import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Projects = ({ projects = [] }) => {
  if (!projects || projects.length === 0) {
    return <p className="coming-soon">Coming soon...</p>;
  }

  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          {project.image && (
            <div className="project-image-container">
              <img src={project.image} className="project-image" alt={project.title || "Project"} />
            </div>
          )}
          <div className="project-content">
            {project.title && (
              <h3 className="project-title">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    {project.title}
                    <FiExternalLink className="external-link-icon" />
                  </a>
                ) : (
                  project.title
                )}
              </h3>
            )}
            {project.description && (
              <p className="project-description">{project.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
