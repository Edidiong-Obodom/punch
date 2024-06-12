import React, { useState } from "react";
import logoTransRIcon from "../../assets/logo-trans-r.svg";
import one from "../../assets/1.svg";
import two from "../../assets/2.svg";
import three from "../../assets/3.svg";
import group1 from "../../assets/group1.svg";
import group2 from "../../assets/group2.svg";
import group3 from "../../assets/group3.svg";

const StartYourJourney = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="eddyContainerFull mt-20 relative">
      <h1 className="md:text-center text-[24px] md:text-[32px] font-bold mb-20">
        Start your journey today.
      </h1>
      <div className="slanted-border mb-16 flex flex-col md:flex-row h-[450px] md:h-[460px] overflow-hidden py-8 px-7 bg-[#edefff]">
        <div className="slanted-border-null flex flex-1">
          <div className="slanted-border-null mr-5">
            <img src={one} height="40" width="40" alt="more" />
          </div>
          <div className="flex-1">
            <h1 className="text-[24px] md:text-[27px] md:max-w-[300px] font-bold">
              Find your next star performer.
            </h1>
            <p className="max-w-[400px] my-6">
              Explore the vast Zwilt marketplace to find the candidate that
              meets your needs.
            </p>
            <button
              type="button"
              className={`h-[60px] w-full md:max-w-[250px] py-6 flex items-center cursor-pointer ${
                isHovered ? "bg-[#202229] rounded-[20px]" : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`bg-[#202229] h-[60px] w-[60px] rounded-[20px] flex items-center justify-center transition-all duration-500 ${
                  isHovered ? "text-slide-out" : "text-slide-return"
                }`}
              >
                <img src={logoTransRIcon} height="15" width="15" alt="more" />
              </div>
              <h1
                className={`ml-3 text-[20px] font-semibold transition-all duration-500 ${
                  isHovered ? "text-slide text-white" : "text-slide-out-return"
                }`}
              >
                Join Now
              </h1>
            </button>
          </div>
        </div>
        <div className="slanted-border-null mt-8 md:mt-0 md:absolute md:top-[-2rem] md:right-3">
          <img
            src={group1}
            height="650"
            width="650"
            alt="more"
            className="object-cover"
          />
        </div>
      </div>
      <div className="slanted-border mb-16 flex flex-col md:flex-row h-[450px] md:h-[460px] overflow-hidden py-8 px-7 bg-[#fff7e1]">
        <div className="slanted-border-null flex flex-1">
          <div className="slanted-border-null mr-5">
            <img src={two} height="40" width="40" alt="more" />
          </div>
          <div className="flex-1">
            <h1 className="text-[24px] md:text-[27px] md:max-w-[300px] font-bold">
              Evaluate to your heart’s content.
            </h1>
            <p className="max-w-[400px] my-6">
              Assess the candidate through work history, transparent tests and
              video interviews.
            </p>
            <button
              type="button"
              className={`h-[60px] w-full md:max-w-[250px] py-6 flex items-center cursor-pointer ${
                isHovered ? "bg-[#202229] rounded-[20px]" : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`bg-[#202229] h-[60px] w-[60px] rounded-[20px] flex items-center justify-center transition-all duration-500 ${
                  isHovered ? "text-slide-out" : "text-slide-return"
                }`}
              >
                <img src={logoTransRIcon} height="15" width="15" alt="more" />
              </div>
              <h1
                className={`ml-3 text-[20px] font-semibold transition-all duration-500 ${
                  isHovered ? "text-slide text-white" : "text-slide-out-return"
                }`}
              >
                Browse Now
              </h1>
            </button>
          </div>
        </div>
        <div className="slanted-border-null mt-8 md:mt-0 md:absolute md:top-[-2rem] md:right-3">
          <img
            src={group2}
            height="650"
            width="650"
            alt="more"
            className="object-cover"
          />
        </div>
      </div>
      <div className="slanted-border mb-16 flex flex-col md:flex-row h-[450px] md:h-[400px] overflow-hidden py-8 px-7 bg-[#f3f3f3]">
        <div className="slanted-border-null flex flex-1">
          <div className="slanted-border-null mr-5">
            <img src={three} height="40" width="40" alt="more" />
          </div>
          <div className="flex-1">
            <h1 className="text-[24px] md:text-[27px] md:max-w-[300px] font-bold">
            Start building your team.
            </h1>
            <p className="max-w-[400px] my-6">
            Onboard your candidate right away and start creating the next big thing.
            </p>
            <button
              type="button"
              className={`h-[60px] w-full md:max-w-[250px] py-6 flex items-center cursor-pointer ${
                isHovered ? "bg-[#202229] rounded-[20px]" : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`bg-[#202229] h-[60px] w-[60px] rounded-[20px] flex items-center justify-center transition-all duration-500 ${
                  isHovered ? "text-slide-out" : "text-slide-return"
                }`}
              >
                <img src={logoTransRIcon} height="15" width="15" alt="more" />
              </div>
              <h1
                className={`ml-3 text-[20px] font-semibold transition-all duration-500 ${
                  isHovered ? "text-slide text-white" : "text-slide-out-return"
                }`}
              >
                Join Now
              </h1>
            </button>
          </div>
        </div>
        <div className="slanted-border-null mt-8 md:mt-0 md:absolute md:top-[-2rem] md:right-3">
          <img
            src={group3}
            height="650"
            width="650"
            alt="more"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default StartYourJourney;
