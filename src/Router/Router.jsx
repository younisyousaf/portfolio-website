import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllServices from "../Pages/AllServices";
import ServiceDetails from "../Pages/ServiceDetails";
import Contact from "../Pages/Contact/Contact";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Protfolio from "../Pages/Protfolio/Protfolio";
import ProtfolioDetails from "../Pages/ProtfolioDetails/ProtfolioDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/all-services",
      //   element: <AllServices />,
      // },
      // {
      //   path: "/service-details",
      //   element: <ServiceDetails />,
      // },
      // {
      //   path: "/all-blog",
      //   element: <AllBlogs />,
      // },
      // {
      //   path: "/blog-details",
      //   element: <BlogDetails />,
      // },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/protfolio",
      //   element: <Protfolio />,
      // },
      // {
      //   path: "/protfolio-details",
      //   element: <ProtfolioDetails />,
      // },
    ],
  },
]);
