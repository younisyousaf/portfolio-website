import React from "react";

const Title = ({ mainTitle, sortTitle }) => {
  return (
    <div className="project__head text-center">
      <span
        className="common__sub"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        {sortTitle}
      </span>
      <h2 className="fw-500" data-aos="fade-up" data-aos-duration="1200">
        {mainTitle}
      </h2>
    </div>
  );
};

export default Title;
