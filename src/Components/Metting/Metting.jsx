import React from "react";
import { Envelope, GeoAlt } from "react-bootstrap-icons";
import mettingImag from "../../assets/img/contact/meeting.png";
const Metting = () => {
  return (
    <section className="project__metting overhid pt-120 pb-120">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <div className="pro__metting__content">
              <div className="project__head">
                <span
                  className="common__sub"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Need a Project?
                </span>
                <h2
                  className="fw-500"
                  data-aos="fade-down"
                  data-aos-duration="1600"
                >
                  Let's work together. fix a meeting!
                </h2>
              </div>
              <div
                className="about__contbox__item pb-30"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="icon">
                  <Envelope className="i" />
                </span>
                <span className="box">
                  <span className="ptext fz-18 mb-1 d-block"> Email </span>
                  <a href="#0" style={{ textTransform: "lowercase" }}>
                    {" "}
                    younisyousaf04@gmail.com{" "}
                  </a>
                </span>
              </div>
              <div
                className="about__contbox__item pb-30 pt-30"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span className="icon">
                  <GeoAlt className="i" />
                </span>
                <span className="box">
                  <span className="ptext fz-18 mb-1 d-block"> Location </span>
                  <a href="#0"> Mansehra, KPK, Pakistan </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="pro__mettingthumb"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <img src={mettingImag} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metting;
