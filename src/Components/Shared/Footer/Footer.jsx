import React from "react";
import { ArrowUpShort, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const socalList = [
  {
    id: 1,
    platfrom: "LinkedIn",
    icon: <ArrowRight />,
    link: "https://www.linkedin.com/in/younis-yousaf-9909b4205/",
  },
  {
    id: 2,
    platfrom: "GitHub",
    icon: <ArrowRight />,
    link: "https://github.com/younisyousaf/",
  },
  {
    id: 3,
    platfrom: "Facebook",
    icon: <ArrowRight />,
    link: "https://www.facebook.com/younis.yousaf.79",
  },
  {
    id: 4,
    platfrom: "Instagram",
    icon: <ArrowRight />,
    link: "https://www.instagram.com/younis.yousaf_/",
  },
];
const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="fl" data-aos="fade-up" data-aos-duration="1000">
            Get In Touch
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="get__content">
                <p>
                  Hello, I’m Younis Yousaf, Website Developer based in Mansehra,
                  Pakistan.
                </p>
                <a href="#0" style={{ textTransform: "lowercase" }}>
                  younisyousaf04@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get__rightcontetn">
                <div className="row g-4">
                  {socalList.map(({ id, icon, platfrom, link }) => {
                    return (
                      <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                        <Link
                          to={`${link}`}
                          target="_blank"
                          className="social__footer"
                        >
                          {platfrom}
                          <i>{icon}</i>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="copyright">
            <p className="white">
              Copyright © 2024{" "}
              <Link to={"/"} className="base">
                Younis Yousaf.
              </Link>{" "}
              All rights reserved.
            </p>
            <ul className="terms">
              <li>
                <a href="#0"> Terms & Condition </a>
              </li>
              <li>
                <a href="#0"> Privacy Policy </a>
              </li>
            </ul>
            <a href="#about" className="toparrow">
              <i>
                <ArrowUpShort />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
