import React from "react";

const Experience = ({ experiences = [] }) => {
  if (!experiences || experiences.length === 0) {
    return <p className="coming-soon">Coming soon...</p>;
  }

  return (
    <div className="experience-list">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <div className="experience-title-row">
              <h3 className="experience-title">{exp.title}</h3>
              {exp.company && (
                <span className="experience-company">{exp.company}</span>
              )}
            </div>
            <div className="experience-meta">
              {exp.date && <span className="experience-date">{exp.date}</span>}
              {exp.location && (
                <span className="experience-location">{exp.location}</span>
              )}
            </div>
          </div>
          {exp.description && (
            <p className="experience-description">{exp.description}</p>
          )}
          {exp.responsibilities && exp.responsibilities.length > 0 && (
            <ul className="experience-responsibilities">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{"◦ " + responsibility}</li>
              ))}
            </ul>
          )}
          {exp.tags && exp.tags.length > 0 && (
            <div className="experience-tags">
              {exp.tags.map((tag, idx) => (
                <span key={idx} className="experience-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
