import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";

// import { images, images2 } from "../Utlits/marqueeItems";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Metting from "../Components/Metting/Metting";
import Services from "../Components/Services/Services";
import WorkeProcess from "../Components/WorkeProcess/WorkeProcess";
import Testimonial from "../Components/Testimonial/Testimonial";
// import MarqueeWapper from "../Components/Shared/Marquee/MarqueeWapper";
import Awards from "../Components/About/Awards";
import Preloader from "../Components/Shared/Preloader/Preloader";

const Home = () => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 1500);
  }, []);

  return (
    <>
      {isFetching && <Preloader />}
      {/* <MarqueeWapper direction="left" images={images} /> */}
      <About />
      {/* <MarqueeWapper direction="right" images={images2} /> */}
      <Awards />
      <Projects />
      <Metting />
      <Services isHeading={true} />
      <WorkeProcess />
      <Testimonial />
      {/* <Blogs /> */}
      <ScrollRestoration />
    </>
  );
};

export default Home;
