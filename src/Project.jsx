import React from "react";

const Projects = ({ img, description }) => (
  <div className="project-card">
    {img && (
      <img src={img} className="project-image" alt="Project" />
    )}
    <div className="project-content">
      <p className="project-description">{description}</p>
    </div>
  </div>
);

export default Projects;
