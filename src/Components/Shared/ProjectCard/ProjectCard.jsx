import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ProjectCard = ({
  image,
  heading,
  subHeading,
  index,
  openLightbox,
  projectLink,
}) => {
  return (
    <div
      className={`project__item  ${index !== 3 && "cus__mb60"}`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div onClick={() => openLightbox(index)} className="thumb mb-30 imgc">
        <img src={image} alt="img" />
      </div>
      <div className="content d-flex  align-items-center justify-content-between gap-2">
        <div className="d-flex flex-column">
          <Link
            to={projectLink}
            target="_blank"
            className="base mb-2 mb-xxl-3 d-block text-uppercase"
          >
            {heading}
          </Link>
          <Link to={projectLink} target="_blank" className="left__cont">
            <h3>{subHeading}</h3>
          </Link>
        </div>
        <Link to={projectLink} target="_blank" className="common__icon imgc">
          <ArrowUpRight className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
