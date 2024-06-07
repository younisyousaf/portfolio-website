import React from "react";
import { StarFill } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";

import quote from "../../assets/img/testimonial/quote.png";
import man1 from "../../assets/img/testimonial/man1.png";
import man2 from "../../assets/img/testimonial/man2.png";
import man3 from "../../assets/img/testimonial/man3.png";
import testiArrow from "../../assets/img/testimonial/testi-arrow.png";
import Partner from "../Partner/Partner";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const reviewList = [
  {
    id: 1,
    name: "Shawn Beltran",
    position: "Business Owner",
    review: `There are many variations of passages of Lorem Ipsum
    available, by injected humour, or randomised words which
    don't look even slightly believable. If you are going to
    use a passage of Lorem Ipsum, you need to be hidden in
    middle of text. All the Lorem Ipsum generators`,
    stars: [<StarFill className="ratting fz-20" />],
  },
  {
    id: 2,
    name: "John Methcel",
    position: "Business Owner",
    review: `There are many variations of passages of Lorem Ipsum
    available, by injected humour, or randomised words which
    don't look even slightly believable. If you are going to
    use a passage of Lorem Ipsum, you need to be hidden in
    middle of text. All the Lorem Ipsum generators`,
    stars: [<StarFill className="ratting fz-20" />],
  },
  {
    id: 3,
    name: "Nethon Jr",
    position: "Business Owner",
    review: `There are many variations of passages of Lorem Ipsum
    available, by injected humour, or randomised words which
    don't look even slightly believable. If you are going to
    use a passage of Lorem Ipsum, you need to be hidden in
    middle of text. All the Lorem Ipsum generators`,
    stars: [<StarFill className="ratting fz-20" />],
  },
];
const Testimonial = () => {
  return (
    <section className="testimonial__section pt-120 pb-120" id="testimonial">
      <div className="container">
        <div className="project__head text-center">
          <span className="common__sub" data-aos="fade-up" data-aos-duration="1000">
            Testimonial
          </span>
          <h2 className="fw-500" data-aos="fade-down" data-aos-duration="1000">
            Happy Words From Happy
            <span className="d-block"> Customer </span>
          </h2>
        </div>
        <div
          className="testimonial__v1wrap pb-120"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="swiper testimonial__slidewrap">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  speed={3000}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination3",
                  }}
                  autoplay={{
                    delay: 2000,
                  }}
                  loop={true}
                  modules={[Pagination, Autoplay]}
                >
                  {/* <div className="swiper-wrapper"> */}
                  {reviewList.map(({ id, name, position, review, stars }) => {
                    return (
                      <SwiperSlide key={id}>
                        <div  className="test__slide swiper-slide">
                          <div className="d-flex mb-40 align-items-center gap-2">
                            {stars.map((star, index) => (
                              <i key={index}>{star}</i>
                            ))}
                          </div>
                          <p>{review}</p>
                          <h4 className="base mb-2">{name}</h4>
                          <span className="fz-18 ptext">{position} </span>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  {/* </div> */}
                </Swiper>

                <div className="swiper-pagination3"></div>
              </div>
            </div>
          </div>
          <div className="quote">
            <img src={quote} alt="img" />
          </div>
          <div className="man1">
            <img src={man1} alt="img" />
          </div>
          <div className="man2">
            <img src={man3} alt="img" />
          </div>
          <div className="man3">
            <img src={man2} alt="img" />
          </div>
          <div className="test__shape">
            <img src={testiArrow} alt="img" />
          </div>
        </div>
        <Partner />
      </div>
    </section>
  );
};

export default Testimonial;
