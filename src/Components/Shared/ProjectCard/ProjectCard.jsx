import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";

const ProjectCard = ({ project, onClick }) => {
  const projectId = useParams();
  return (
    <div
      className={`project__item  ${project.index !== 3 && "cus__mb60"}`}
      data-aos="fade-up"
      data-aos-duration="1000"
      onClick={onClick} // Handle click to navigate to project details
    >
      <div className="thumb mb-30 imgc">
        <img src={project.image} alt="img" />
      </div>
      <div className="content d-flex align-items-center justify-content-between gap-2">
        <div className="d-flex flex-column">
          <Link
            to={project.projectLink}
            target="_blank"
            className="base mb-2 mb-xxl-3 d-block text-uppercase"
          >
            {project.heading}
          </Link>
          <Link to={project.projectLink} target="_blank" className="left__cont">
            <h3>{project.subHeading}</h3>
          </Link>
        </div>
        <Link
          to={`/project-details/${project.id}`}
          className="common__icon imgc"
        >
          <ArrowUpRight className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
