import React from "react";

const WorkProcessCard = ({title, info, list}) => {
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-6"
      data-aos="flip-up"
      data-aos-duration="500"
    >
      <div className="process__item">
        <h2 className="white mb-24">{title}</h2>
        <p className="mb-30 pra fz-18">{info}</p>
        <ul>
          {list.map((li, index) => (
            <li key={index}>{li}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkProcessCard;
