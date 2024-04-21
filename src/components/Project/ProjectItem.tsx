import React from "react";
import "./ProjectItem.css";

interface ProjectItemProps {
  name: string;
  technologies: string;
  type: string;
  lien: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  technologies,
  type,
  lien,
}) => {
  const imagePath = `/${name}.png`;

  return (
    <div className="project-container">
      <div className="card project-card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <img src={imagePath} className="card-img-top" alt={name} />
          <p className="card-text">Technologies: {technologies}</p>
          <p className="card-text">Type: {type}</p>
          <a
            href={lien}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le projet
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
