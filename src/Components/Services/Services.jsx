import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";

const serviceList = [
  {
    id: "01",
    heading: "Frontend Development",
    subHeading: "Web Development",
    para: "Creating responsive and dynamic web pages using HTML, CSS, and JavaScript frameworks like React JS and Next JS. Ensuring cross-browser compatibility and performance optimization.",
  },
  {
    id: "02",
    heading: "Custom Websites",
    subHeading: "Web Development",
    para: "Developing tailored websites that meet the unique needs and specifications of clients. Focusing on functionality, design, and user experience to create standout web solutions.",
  },
  {
    id: "03",
    heading: "Landing Pages",
    subHeading: "Web Design",
    para: "Designing and developing high-converting landing pages to boost marketing campaigns. Emphasizing clear calls-to-action, engaging content, and streamlined user experiences.",
  },
  {
    id: "04",
    heading: "React/Next.js Websites",
    subHeading: "Web Development",
    para: "Building modern, efficient, and scalable web applications using React JS and Next JS frameworks. Leveraging the latest technologies to deliver high-performance web solutions.",
  },
];
const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="My Special Service For Your Business Development"
            sortTitle="Services That i Provide"
          />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
