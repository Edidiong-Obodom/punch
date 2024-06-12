import React from "react";
import Carousel from "./carousel";
import { MOCK_CAROUSEL_DATA } from "../../utilities/mock_data";

const WhyChooseCarousel = () => {
  return (
    <section className="half-background py-20 md:py-28 flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 flex flex-col px-[40px] py-[20px] mb-8 md:mb-0">
        <h1 className="text-[24px] md:text-[32px] md:max-w-[200px] font-bold">
          Why choose Zwilt?
        </h1>
        <p className="mt-7 max-w-[300px] md:max-w-[220px]">
          We take complex hiring processes - and simplify them. Connecting you
          to the world’s highly qualified talent pool.
        </p>
      </div>
      <Carousel images={MOCK_CAROUSEL_DATA} />
    </section>
  );
};

export default WhyChooseCarousel;
