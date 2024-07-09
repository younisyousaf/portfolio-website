import React, { useContext } from "react";
import Title from "../Shared/Title/Title";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import { projectList } from "../../Utlits/projectList";
import { ProjectContext } from "../../store/ProjectContext";

const Projects = () => {
  const { setCurrentProject } = useContext(ProjectContext);

  const handleProjectClick = (project) => {
    setCurrentProject(project);
  };

  return (
    <section className="project__section pt-120 pb-120" id="projects">
      <div className="container">
        <Title
          mainTitle={"Look at my portfolio and give me your feedback"}
          sortTitle={"Completed Projects"}
        />

        <div className={`project__wrapone`}>
          {projectList.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
