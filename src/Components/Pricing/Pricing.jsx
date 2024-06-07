import React from "react";
import basic from "../../assets/img/project/basic.png";
import warranty from "../../assets/img/project/warranty.png";
import premium from "../../assets/img/project/premium-quality.png";
import Price from "./Price";
import Title from "../Shared/Title/Title";
const planData = [
  {
    id: 1,
    planName: "Basic Plan",
    price: "$35",
    time: "per month",
    fetcher: [
      " Web Development",
      " Mobile Development",
      "Advetising",
      "Graphic design",
      "Project management",
    ],
    image: basic,
  },
  {
    id: 2,
    planName: "Ultra Plan",
    price: "$65",
    time: "per month",
    fetcher: [
      " Web Development",
      " Mobile Development",
      "Advetising",
      "Graphic design",
      "Project management",
    ],
    image: warranty,
  },
  {
    id: 3,
    planName: "Gold Plan",
    price: "$95",
    time: "per month",
    fetcher: [
      " Web Development",
      " Mobile Development",
      "Advetising",
      "Graphic design",
      "Project management",
    ],
    image: premium,
  },
];
const Pricing = () => {
  return (
    <section className="pricing__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle={"The best pricing plans to get your best"}
          sortTitle={"Choose Your Plan"}
        />
        <div className="row g-4 justify-content-center">
          {planData.map(({ id, image, planName, fetcher, price, time }) => (
            <Price
              key={id}
              image={image}
              planName={planName}
              price={price}
              time={time}
              fetcher={fetcher}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
