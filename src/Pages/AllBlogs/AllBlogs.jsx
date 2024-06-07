import React from "react";
import { ScrollRestoration, Link } from "react-router-dom";
import {  } from "react-router-dom";

import BlogSidebar from "../../Components/Blogs/BlogSidebar";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";

import BlogCard from "../../Components/Blogs/BlogCard/BlogCard";
import { blogsList } from "../../Utlits/blogList";

const AllBlogs = () => {

  return (
    <>
      <PageHeader heading={"Blog Standard"} page={"Blog Standard"} />
      <section className="blog__bsection pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="blog__bleft__wrapper">
                {blogsList.map(({ id, heading, image, para, date }) => (
                  <BlogCard
                    key={id}
                    date={date}
                    heading={heading}
                    image={image}
                    para={para}
                  />
                ))}
                <div className="pagination__box cmn__bg">
                  <ul className="pagi">
                    <li>
                      <Link>1</Link>
                    </li>
                    <li>
                      <Link>2</Link>
                    </li>
                    <li>
                      <Link>3</Link>
                    </li>
                    <li>
                      <Link>
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </li>
                  </ul>
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

export default AllBlogs;
