import React from "react";
import { StarFill } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import quote from "../../assets/img/testimonial/quote.png";
import man1 from "../../assets/img/testimonial/shahmeer.jpg";
import man2 from "../../assets/img/testimonial/hammad.jpg";
import man3 from "../../assets/img/testimonial/waseem.jpg";
import testiArrow from "../../assets/img/testimonial/testi-arrow.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const reviewList = [
  {
    id: 1,
    name: "Muhammad Hammad Lodhi",
    position: "CEO & Co-Founder at CodeMatics Inc",
    review: `Younis Yousaf worked as a trainee web developer at Codematics for about a year. He demonstrated impressive learning ability,  positive attitude and strong problem-solving skills. He consistently delivered high-quality work and showed a keen interest in learning and growth. 
    I highly recommend Younis for any web development opportunities. He has the potential to excel in his career and make significant contributions to any organization.`,
    stars: [
      <StarFill className="ratting fz-20" />,
      <StarFill className="ratting fz-20" />,
      <StarFill className="ratting fz-20" />,
      <StarFill className="ratting fz-20" />,
      <StarFill className="ratting fz-20" />,
    ],
  },
  {
    id: 2,
    name: "Muhammad Waseem",
    position: "Senior Software Engineer at BeeTechnica.",
    review: `I wholeheartedly recommend Younis Yousaf for any professional endeavor or role he pursues. His dedication, expertise, and interpersonal skills make him an invaluable asset to any team. I am confident that he will continue to achieve great success in his future endeavors.`,
    stars: [
      <StarFill className="ratting fz-20" />,
      <StarFill className="ratting fz-20" />,
      <StarFill className="ratting fz-20" />,
      <StarFill className="ratting fz-20" />,
      <StarFill className="ratting fz-20" />,
    ],
  },
  {
    id: 3,
    name: "Shahmeer Khalid",
    position: "Vue Developer at CodeMatics Inc.",
    review: `It is my pleasure to write a recommendation for Younis Yousaf who was a student of mine in Codematic(Urraan program) where I had the opportunity to witness their growth and development as a web developer.

    During his time as my student, I was consistently impressed by his dedication, enthusiasm, and rapid progress in the field of web development. He showed a strong passion for learning and an unwavering commitment to mastering the skills required for this profession.
    
    Younis quickly grasped the fundamental and advance concepts of web development, and their ability to apply this knowledge to real-world projects was remarkable. He consistently delivered high-quality work and demonstrated a keen eye for detail in creating well-crafted and functional websites.`,
    stars: [
      <StarFill className="ratting fz-20" />,
      <StarFill className="ratting fz-20" />,
      <StarFill className="ratting fz-20" />,
      <StarFill className="ratting fz-20" />,
      <StarFill className="ratting fz-20" />,
    ],
  },
];
const Testimonial = () => {
  return (
    <section className="testimonial__section pt-120 pb-120" id="testimonial">
      <div className="container">
        <div className="project__head text-center">
          <span
            className="common__sub"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Testimonial
          </span>
          <h2 className="fw-500" data-aos="fade-down" data-aos-duration="1000">
            Happy Words From Happy
            <span className="d-block"> Mentor's </span>
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
                        <div className="test__slide swiper-slide">
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
            <img
              src={man1}
              alt="img"
              width={120}
              height={120}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="man2">
            <img
              src={man3}
              alt="img"
              width={214}
              height={220}
              style={{ borderTopRightRadius: "50%" }}
            />
          </div>
          <div className="man3">
            <img
              src={man2}
              alt="img"
              width={200}
              height={200}
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="test__shape">
            <img src={testiArrow} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
