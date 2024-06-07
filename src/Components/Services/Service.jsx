import React from "react";
const Service = ({ heading, subHeading, para, id }) => {
  return (
    <div
      className="service__unique__item pb-40 pt-40"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="left__service">
        <div className="serial__adjust">
          <span> {id} </span>
          <div className="cont">
            <h5>{subHeading}</h5>
            <h2>{heading}</h2>
          </div>
        </div>
        <p className="pra">{para}</p>
      </div>
    </div>
  );
};

export default Service;
