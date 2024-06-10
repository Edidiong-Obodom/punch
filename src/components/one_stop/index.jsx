import React, { useState } from "react";
import It from "./it";
import Design from "./design";
import logoTransRIcon from "../../assets/logo-trans-r.svg";

const OneStop = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="bg-[#EDEFFF] slanted-border h-fit w-full mt-5 py-[8rem] md:py-[6rem]">
      <div className="flex flex-col h-fit items-center slanted-border-null eddyContainerFull">
        <h1 className="text-center w-fit font-[700] text-[26px] md:text-[45px] md:leading-[64px]">
          Your one-stop marketplace for finding
        </h1>
        <h1 className="text-center w-fit font-[700] text-[26px] md:text-[45px] md:leading-[64px]">
          the talent your business needs.
        </h1>
        <It />
        <Design />
        <div className="flex flex-col-reverse md:flex-row w-full mt-20">
          <div className="w-full md:w-1/2 py-3 md:py-6 flex items-center cursor-pointer">
            <button
              type="button"
              className={`h-[70px] w-full md:max-w-[250px] py-6 flex items-center cursor-pointer ${
                isHovered ? "bg-[#202229] rounded-[30px]" : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`bg-[#202229] h-[70px] w-[70px] rounded-[30px] flex items-center justify-center transition-all duration-500 ${
                  isHovered ? "text-slide-out" : "text-slide-return"
                }`}
              >
                <img src={logoTransRIcon} height="20" width="20" alt="more" />
              </div>
              <h1
                className={`ml-3 text-[20px] font-semibold transition-all duration-500 ${
                  isHovered ? "text-slide text-white" : "text-slide-out-return"
                }`}
              >
                Explore More
              </h1>
            </button>
          </div>
          <div className="w-full md:w-1/2 py-3 md:py-6 flex items-center">
            <h1 className="text-[20px]">
              <span className="font-[600]">30 more</span> to explore
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneStop;
