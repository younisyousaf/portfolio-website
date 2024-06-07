import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";


import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import BlogSidebar from "../../Components/Blogs/BlogSidebar";

import bblog1 from "../../assets/img/blog/bblog1.png";
import blogDetailsb2 from "../../assets/img/blog/blog-detailsb2.png";
import straightQuotes from "../../assets/img/blog/straight-quotes.png";
import Form from "../../Components/Shared/Form/Form";
import { socialIcons } from "../../Utlits/socilIcons";

const BlogDetails = () => {

  return (
    <>
      <PageHeader
        heading={"Brand design that helps the company grow"}
        page={"Brand design that helps the company grow"}
      />
      <section className="blog__bsection pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="blog__bleft__wrapper">
                <div
                  className="blog__bitem"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Link to="" className="thumb">
                    <img src={bblog1} alt="img" />
                  </Link>
                  <div className="content__two">
                    <div
                      className="text__box mb-30"
                      data-aos="fade-up"
                      data-aos-duration="1400"
                    >
                      <span className="text__de">
                        By: admin / Lifestyle / Posted on September 19, 2023 /
                        Comments: 0
                      </span>
                      <p className="fz-16 pra ttext__one">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a Lorem Ipsum, you need to be sure there isn't
                        anything embarrassing hidden in the middle of text. All
                        the Lorem Ipsum the Internet tend to repeat predefined
                        chunks as necessary,
                      </p>
                      <p className="fz-16 pra">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni neque
                        porro quisquam est, qui dolorem ipsum quia dolor sit
                        amet, adipisci velit, sed quia non numquam eius modi
                        tempora incidunts ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem the corporis suscipit laboriosam,
                        nisi ut aliquid
                      </p>
                    </div>
                    <div className="quite__box mb-30">
                      <img src={straightQuotes} alt="img" />
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, adipisci velit, sed quia non numquam
                      </p>
                      <Link to="">David Kingston</Link>
                    </div>
                    <p className="fz-16 pra ttext__one mb__cus60">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      minima veniam, quis nostrum exercitationem ullam corporis
                      suscipit laboriosam,
                    </p>
                    <h3 className="white mb-30">
                      Matias is the only theme you will ever need
                    </h3>
                    <div className="thumb mb-30">
                      <img src={blogDetailsb2} alt="img" />
                    </div>
                    <p className="fz-16 pra ttext__one mb-30">
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same
                      as from these cases are perfectly simple and easy to
                      distinguish. In a free hour,
                    </p>
                    <div
                      className="text__box mb-30"
                      data-aos="fade-up"
                      data-aos-duration="1600"
                    >
                      <ul className="challenge__list">
                        <li>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </li>
                        <li>
                          Nor again is there anyone who loves or pursues or
                          desires to obtain pain of itself, because it is pain,
                        </li>
                        <li>
                          On the other hand, we denounce with righteous
                          indignation and dislike
                        </li>
                      </ul>
                    </div>
                    <p className="fz-16 pra ttext__one mb-30">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem
                    </p>
                  </div>
                  <div className="post__in cmn__bg mb__cus60">
                    <div className="post__left">
                      <span className="fz-20 fw-500 white">Posted in :</span>
                      <Link to="">Business</Link>
                      <Link to="">Digital</Link>
                    </div>
                    <div className="post__right">
                      <span className="fz-20 fw-500 white">Share :</span>
                      <ul className="social-cus d-flex align-items-center">
                        {socialIcons.map(({id, icon}) => (
                          <li key={id}>
                            <Link to="">
                              <i>
                                {icon}
                              </i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Form isColTwo={true} />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default BlogDetails;
