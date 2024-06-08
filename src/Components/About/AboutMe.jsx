import React, { useEffect } from "react";
import { Facebook, Linkedin, Instagram, Github } from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import personalInfoThumb from "../../assets/img/about/personal-info.png";

import AOS from "aos";
import "aos/dist/aos.css";

const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "younisyousaf04@gmail.com",
  },
  {
    id: 2,
    system: "Phone",
    contact: "+92 349 1300 122",
  },
  {
    id: 3,
    system: "Address",
    contact: "Mansehra, KPK, Pakistan",
  },
  {
    id: 4,
    system: "Follow",
    socialContact: [
      { icon: <Facebook />, link: "https://www.facebook.com/younis.yousaf.79" },
      { icon: <Github />, link: "https://github.com/younisyousaf/" },
      {
        icon: <Linkedin />,
        link: "https://www.linkedin.com/in/younis-yousaf-9909b4205/",
      },
      {
        icon: <Instagram />,
        link: "https://www.instagram.com/younis.yousaf_/",
      },
    ],
  },
];

const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src={personalInfoThumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Personal Info
              </h2>
              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                I'm Younis Yousaf, a dedicated Frontend Developer from Mansehra,
                KPK, Pakistan. With over a year of experience, I excel in
                crafting dynamic, responsive websites. I focus on delivering
                high-quality, user-centric solutions that satisfy client needs.
                Committed to continuous learning, I stay current with industry
                trends to offer innovative and efficient solutions.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, contact, socialContact, system }) => {
                    return (
                      <div
                        key={id}
                        className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                        data-aos="zoom-in"
                      >
                        <div className="abox">
                          <div className="about__contbox__item">
                            <span className="ptext fz-18 mb-20 d-block">
                              {system}
                            </span>
                            {contact === "younisyousaf04@gmail.com" ? (
                              <Link
                                to={""}
                                style={{ textTransform: "lowercase" }}
                              >
                                {contact}
                              </Link>
                            ) : (
                              <Link to={""}>{contact}</Link>
                            )}
                            {socialContact && (
                              <ul className="d-flex align-items-center gap-2 gap-xl-4">
                                {socialContact.map((info, index) => (
                                  <li key={index}>
                                    <Link to={`${info.link}`} target="_blank">
                                      {info.icon}{" "}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
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

export default AboutMe;
