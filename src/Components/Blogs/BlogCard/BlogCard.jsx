import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ heading, para, image, date }) => {
  return (
    <div
      className="blog__bitem mb__cus50"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Link to={"/blog-details"} className="thumb">
        <img src={image} alt="img" />
      </Link>
      <div className="content">
        <span className="bdate d-flex align-items-center gap-1 ptext fz-16">
          <span className="text-uppercase text-white">NEWS</span>. {date}
        </span>
        <h3>
          <Link to={"/blog-details"}>{heading}</Link>
        </h3>
        <p className="fz-16 ptext">{para}</p>
        <Link
          to={"/blog-details"}
          className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2"
        >
          <span className="get__text">Read More</span>
          <span>
            <i className="bi bi-arrow-right"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
