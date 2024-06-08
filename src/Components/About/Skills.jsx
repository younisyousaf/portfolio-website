import React from "react";
import personalInfothumb from "../../assets/img/about/personal-info.png";

const skillsList = [
  { id: 1, skill: "HTML" },
  { id: 2, skill: "CSS" },
  { id: 3, skill: "Bootstrap" },
  { id: 4, skill: "JavaScript" },
  { id: 5, skill: "Tailwind CSS" },
  { id: 6, skill: "React JS" },
  { id: 7, skill: "Next JS" },
  { id: 8, skill: "API Integration" },
  { id: 9, skill: "Material UI" },
  { id: 10, skill: "JSON" },
  { id: 11, skill: "ES5" },
  { id: 12, skill: "ES6" },
  { id: 13, skill: "Postman" },
  { id: 14, skill: "Git" },
  { id: 15, skill: "GitHub" },
];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Skills</h2>
              <p>
                Driven Frontend Developer (1 year experience) with a passion for
                crafting impactful solutions. Expertise in React JS, Next JS,
                Material UI, JavaScript, API Integration, Tailwind CSS, HTML,
                CSS, and Bootstrap. Eager collaborator and quick learner, ready
                to contribute to your team's success story.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({ id, skill }) => {
                    return (
                      <div key={id} className="col-12 col-md-6 col-lg-4">
                        <div className="abox myskill__item">
                          <span className="ptext fz-18 mb-15 d-block">
                            {skill}
                          </span>
                          <div className="mys"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
