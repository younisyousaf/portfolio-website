import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact/Contact";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project-details/:projectId",
        element: <ProjectDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
