import React from "react";
import personalInfothumb from "../../assets/img/logo/logo.jpg";

const Education = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Education</h2>
              <p>
                Driven Frontend Developer (1 year experience) with a passion for
                crafting impactful solutions. Expertise in React JS, Next JS,
                Material UI, JavaScript, API Integration, Tailwind CSS, HTML,
                CSS, and Bootstrap. Eager collaborator and quick learner, ready
                to contribute to your team's success story.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2019 - 2023</span>
                  <div className="expri__cont">
                    <h4
                      className="mb-15 text-white"
                      style={{ textAlign: "right" }}
                    >
                      BS - Software Engineering
                    </h4>
                    <p
                      className="fz-18 pra d-block"
                      style={{ textAlign: "right" }}
                    >
                      Hazara University, Mansehra
                    </p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2017 - 2019</span>
                  <div className="expri__cont">
                    <h4
                      className="mb-15 text-white"
                      style={{ textAlign: "right" }}
                    >
                      Pre - Engineering
                    </h4>
                    <p
                      className="fz-18 pra d-block"
                      style={{ textAlign: "right" }}
                    >
                      Jinnah Basic School & Boys College
                    </p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2015 - 2017</span>
                  <div className="expri__cont">
                    <h4
                      className="mb-15 text-white"
                      style={{ textAlign: "right" }}
                    >
                      Matriculation
                    </h4>
                    <p
                      className="fz-18 pra d-block"
                      style={{ textAlign: "right" }}
                    >
                      New Shaheen Academy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
