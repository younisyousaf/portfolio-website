import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../assets/img/project/kardaan.png";
import detailbg1 from "../../assets/img/project/kardaan-2.png";
import detailbg2 from "../../assets/img/project/kardaan-3.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import { socialIcons } from "../../Utlits/socilIcons";
import { ProjectContext } from "../../store/ProjectContext";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const { currentProject, setCurrentProject } = useContext(ProjectContext);
  // console.log(projectId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const project = projectList.find(
      (project) => project.id === parseInt(projectId)
    );
    if (project && (!currentProject || currentProject.id !== project.id)) {
      setCurrentProject(project);
    }
  }, [projectId, setCurrentProject, currentProject]);

  if (!currentProject || currentProject.id !== parseInt(projectId)) {
    return <div>Project not found</div>;
  }
  return (
    <>
      <PageHeader
        heading={currentProject.subHeading}
        page={currentProject.heading}
      />
      <section className="protfolio__details pb-120">
        <div className="container">
          <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={detailbg} alt="img" />
            <div className="prot__detail__contact">
              <h3>Project Info</h3>
              <div className="prot__itembox">
                <div className="prot__left">
                  <div className="items mb__cus30">
                    <h5>Clients</h5>
                    <p>{currentProject.client}</p>
                  </div>
                  <div className="items">
                    <h5>Location</h5>
                    <p>{currentProject.location}</p>
                  </div>
                </div>
                <div className="prot__left">
                  <div className="items mb__cus30">
                    <h5>Category</h5>
                    <p>{currentProject.heading}</p>
                  </div>
                </div>
              </div>
              <ul className="social d-flex gap-3">
                {socialIcons.map(({ icon, id, link }) => (
                  <li key={id}>
                    <Link to={link}>
                      <i>{icon}</i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="details__textwrap">
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <p className="fz-16 pra ttext__one">
                {currentProject.description}
              </p>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <h3 className="text__boxhead">Challenge</h3>
              <p className="fz-16 pra ttext__one">
                I have to develop a website for the Construction Company{" "}
                <Link to="https://www.kardaanservices.com/" className="base">
                  Kardaan Services
                </Link>
                , which is a digital platform through which you can directly
                connect with nearby skilled service providers in your area and
                get your work done. They offer a variety of services. Following
                is the list of services:
              </p>
              <u className="challenge__list">
                <li>Construcion Services</li>
                <li>Elevator / Escalator Installation</li>
                <li>Rennovation Services</li>
                <li>Maintenance Services</li>
                <li>Construction Material Supply</li>
                <li>Solar Panel Installation</li>
              </u>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <h3 className="text__boxhead">Solution & Result</h3>
              <p className="fz-16 pra">
                I developed this website using React JS, Next.js, Tailwind CSS,
                and Material UI. The project involved API integration, form
                validation, user authentication, and login/logout
                functionalities. I also contributed to the admin panel, ensuring
                that only authenticated admins could access it. The admin panel
                includes CRUD operations. Additionally, I used Git and GitHub
                for version control and code management.
              </p>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="thumb">
                <img src={detailbg1} alt="img" />
              </div>
              <div className="thumb">
                <img src={detailbg2} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="protfolidetails__section cmn__bg pt-120 pb-120">
        <div className="container">
          <div className="project__head text-center">
            <span
              className="common__sub"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Protfolio
            </span>
            <h2 className="fw-500" data-aos="fade-up" data-aos-duration="1000">
              Related Work
            </h2>
          </div>

          <div className=" project__wrapone">
            {projectList.slice(1, 3).map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => setCurrentProject(project)}
              />
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ProjectDetails;
