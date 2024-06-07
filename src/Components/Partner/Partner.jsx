import React from "react";
import partner1 from "../../assets/img/testimonial/partner1.png";
import partner2 from "../../assets/img/testimonial/partner2.png";
import partner3 from "../../assets/img/testimonial/partner3.png";
import partner4 from "../../assets/img/testimonial/partner4.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

const partnerList = [
  {
    id: 1,
    image: partner1,
  },
  {
    id: 2,
    image: partner2,
  },
  {
    id: 3,
    image: partner3,
  },
  {
    id: 4,
    image: partner4,
  },
  {
    id: 5,
    image: partner1,
  },
];
const Partner = () => {
  return (
    <>
      <div className="sponsor__area pt-120">
        <h4
          className="sponsor__title"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          More than 100+ companies trusted us worldwide
        </h4>
        <div className="swiper sponsor__wrap">
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
            modules={[Pagination, Autoplay, Navigation]}
          >
            {partnerList.map(({ id, image }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="swiper-wrapper">
                    <div key={id} className="sponsor__slide swiper-slide">
                      <img src={image} alt="img" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
