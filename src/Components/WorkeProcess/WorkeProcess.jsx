import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Planning",
    info: "Gathering requirements, defining project scope, and establishing a timeline and budget.",
    list: [
      "Requirement gathering",
      "Project scope definition",
      "Timeline and budget setup",
    ],
  },

  {
    id: 2,
    title: "Development",
    info: "Setting up the environment, developing front-end and back-end, and integrating CMS.",
    list: [
      "Environment setup",
      "Front-end and back-end development",
      "CMS integration",
    ],
  },
  {
    id: 3,
    title: "Testing",
    info: "Conducting various tests to ensure functionality, usability, and performance.",
    list: [
      "Unit and integration testing",
      "Usability and performance testing",
      "Cross-browser and security testing",
    ],
  },
  {
    id: 4,
    title: "Deployment",
    info: "Final review and moving the website from staging to live server.",
    list: ["Staging environment setup", "Final review", "Live deployment"],
  },
  {
    id: 5,
    title: "Maintenance",
    info: "Ongoing monitoring, updates, and enhancements based on user feedback.",
    list: [
      "Continuous monitoring",
      "Regular updates",
      "User feedback and optimization",
    ],
  },
];
const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle="Your Dream Website In Just Few Steps"
          sortTitle="Working Process"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
