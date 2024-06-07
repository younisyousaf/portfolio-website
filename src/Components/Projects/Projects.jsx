import React, { useState } from "react";
import Title from "../Shared/Title/Title";
import Lightbox from "../Shared/LightBox/LightBox";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import { projectList, imagesList } from "../../Utlits/projectList";

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [filteredImages, setFilteredImages] = useState([]);
  const [currentId, setCurrentId] = useState(null); // Initialize currentId as null

  const openLightbox = (index, subHeading) => {
    setCurrentId(index); // Set the currentId to the index of the clicked project card
    setLightboxOpen(true);
    // Filter images based on subHeading
    const filtered = imagesList.filter(
      (image) => image.subHeading === subHeading
    );
    setFilteredImages(filtered.map((item) => item.image));
  };

  return (
    <section className="project__section pt-120 pb-120" id="projects">
      <div className="container">
        <Title
          mainTitle={"Look at my portfolio and give me your feedback"}
          sortTitle={"Completed Projects"}
        />

        <div className={`project__wrapone`}>
          {projectList.map(
            ({ heading, id, image, subHeading, link }, index) => (
              <ProjectCard
                key={id}
                image={image}
                heading={heading}
                subHeading={subHeading}
                openLightbox={() => openLightbox(index, subHeading)}
                index={index}
                projectLink={link}
              />
            )
          )}
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          setLightboxOpen={setLightboxOpen}
          currentId={currentId} // Pass currentId to Lightbox
        />
      )}
    </section>
  );
};

export default Projects;
