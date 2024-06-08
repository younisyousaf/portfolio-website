import React from "react";
import { XLg, ChevronRight } from "react-bootstrap-icons";
import logo from "../../../assets/img/logo/logo.svg";
import { socialIcons } from "../../../Utlits/socilIcons";
import { Link } from "react-router-dom";

const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
  return (
    <div className={`subside__barmenu ${isSidebarActive ? "active" : ""}`}>
      <div
        onClick={() => setIsSidebarActive(false)}
        className="remove__click d-flex justify-content-center align-items-center"
      >
        <i>
          <XLg />
        </i>
      </div>
      <div className="sub__contact__wrapper d-grid">
        <Link to={""} className="side-logo">
          <img
            src={logo}
            alt="img"
            height={100}
            width={100}
            style={{ borderRadius: "50%" }}
          />
        </Link>
        <p>
          Driven Frontend Developer (1 year experience) with a passion for
          crafting impactful solutions. Expertise in React JS, Next JS, Material
          UI, JavaScript, API Integration, Tailwind CSS, HTML, CSS, and
          Bootstrap. Eager collaborator and quick learner, ready to contribute
          to your team's success story.
        </p>
        <div className="sub__contact-left d-grid">
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> address </span>
              <span className="textp"> Mansehra, KPK, Pakistan </span>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> email </span>
              <Link className="textp" style={{ textTransform: "lowercase" }}>
                {" "}
                younisyousaf04@gmail.com{" "}
              </Link>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> whatsapp </span>
              <Link className="textp"> +92 349 1300 122 </Link>
            </div>
          </div>
        </div>
        <div className="sub__contact-right mb-80 position-relative">
          <ul className="social d-flex gap-3">
            {socialIcons.map(({ icon, id, link }) => (
              <li key={id}>
                <Link to={`${link}`}>
                  <i>{icon}</i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to={"/contact"}
          className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2"
        >
          <span>
            <i>
              <ChevronRight />
            </i>
          </span>
          <span className="get__text"> Let's Talk </span>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
