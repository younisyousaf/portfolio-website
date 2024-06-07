import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Facebook,
  Linkedin,
  Instagram,
  PlayFill,
  Github,
} from "react-bootstrap-icons";

import bannerMan from "../../assets/img/logo/logo.jpg";
import scrollDown from "../../assets/img/banner/scroll-down.png";
import bnArrow from "../../assets/img/banner/bn-arrow.png";
import VideoPlay from "../Shared/VideoPlay/VideoPlay";

const socalIcon = [
  {
    id: 1,
    icon: <Facebook />,
    link: "https://www.facebook.com/younis.yousaf.79",
  },
  {
    id: 2,
    icon: <Github />,
    link: "https://github.com/younisyousaf/",
  },
  {
    id: 3,
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/younis-yousaf-9909b4205/",
  },
  {
    id: 4,
    icon: <Instagram />,
    link: "https://www.instagram.com/younis.yousaf_/",
  },
];
const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if (!position) {
      setPosition(true);
    }
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section id="home">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="banner__content">
              <Link to={""} className="bn__currently">
                <span className="d-block">
                  Currently available for Frontend Developer Roles
                </span>
                {/* <span className="d-flex gap-4 align-items-center">
                  worldwide
                  <i className="bi bi-arrow-up-right"></i>
                </span> */}
              </Link>
              <h1>
                <span className="hone"> Creative Visual</span>
                <span className="d-block designers" data-text="Developer">
                  Developer
                </span>
              </h1>
              <div className="video__area">
                <img src={bnArrow} className="vid__arrow" alt="img" />
                <div onClick={openLightbox} className="video__80 video-btn">
                  <i>
                    <PlayFill />
                  </i>
                </div>
                <span className="proces">Work Process</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={`banner__thumb  ${
                position ? "right_up_animat" : "right_up"
              }`}
            >
              <img src={bannerMan} alt="man-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="banner__rightinfo">
        <div className="right__infoscroll">
          <Link to={""} className="scroll">
            Follow Me
          </Link>
          <Link to={""} className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
        <div className="banner__xlsocial">
          <ul className="banner__soci d-grid justify-content-center">
            {socalIcon.map(({ icon, id, link }) => {
              return (
                <li key={id}>
                  <Link to={`${link}`} target="_blank">
                    <i>{icon}</i>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* {lightboxOpen && (
        <VideoPlay
          setLightboxOpen={setLightboxOpen}
          url="https://www.youtube.com/embed/tgbNymZ7vqY"
        />
      )} */}
    </section>
  );
};

export default Banner;
