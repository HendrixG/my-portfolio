const ProjectCard = ({ title, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="project-card-link"
  >
    <div className="project-card">
      <div className="card-inner">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  </a>
);

export default ProjectCard;


