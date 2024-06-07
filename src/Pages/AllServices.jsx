import React from "react";
import { ScrollRestoration } from "react-router-dom";

import Services from "../Components/Services/Services";
import Metting from "../Components/Metting/Metting";
import WorkeProcess from "../Components/WorkeProcess/WorkeProcess";
import Pricing from "../Components/Pricing/Pricing";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";

const AllServices = () => {
  return (
    <>
      <PageHeader heading={"Services All"} page={"Services All"} />
      <Services isHeading={false} />
      <Metting />
      <Pricing />
      <WorkeProcess />
      <ScrollRestoration />
    </>
  );
};

export default AllServices;
