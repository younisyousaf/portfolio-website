import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeWapper = ({ images, direction }) => {
  return (
    <div className="marquee-wrapper text-slider">
      <div className="marquee-inner ">
        <Marquee direction={direction}>
          {images?.map(({ id, image }) => (
            <img key={id} src={image} alt="" width={750} height={80} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeWapper;
