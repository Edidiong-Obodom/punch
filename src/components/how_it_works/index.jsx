import React, { useState } from "react";
import quoteIcon from "../../assets/quote.svg";
import jasonIcon from "../../assets/jason_makki.svg";
import grooveIcon from "../../assets/groove.svg";
import grooveHqIcon from "../../assets/groovehq.svg";
import logoPurpleLIcon from "../../assets/logo-purple-l.svg";
import logoPurpleRIcon from "../../assets/logo-purple-r.svg";

const HowItWorks = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="slanted-border relative h-fit bg-[#202229] text-white">
      <img
        src={quoteIcon}
        height="180"
        width="180"
        alt="quote icon"
        className="absolute top-0 right-2"
      />
      <div className="slanted-border-null flex h-full flex-col md:flex-row eddyContainerFull py-16 md:py-24">
        <div className="w-full md:w-1/2 h-full flex flex-col">
          <div className="">
            <h1 className="font-[700] text-[26px] md:text-[45px] md:leading-[64px] max-w-[350px]">
              How it worked
            </h1>
            <h1 className="font-[700] text-[26px] md:text-[45px] md:leading-[64px] max-w-[350px] mb-4">
              for Jason{" "}
              <img
                src={jasonIcon}
                height="45"
                width="45"
                alt="groove purple text"
                className="inline rounded-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />{" "}
              at
            </h1>
            <img
              src={grooveHqIcon}
              height="180"
              width="180"
              alt="groove purple text"
            />
          </div>
          <div className="mt-6 max-w-[350px]">
            <p className="text-[16px] opacity-70">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </p>
          </div>
          <div className="mt-6 max-w-[350px] flex flex-row">
            <div
              className={`bg-white h-[50px] w-[50px] rounded-[20px] flex items-center justify-center`}
            >
              <img src={logoPurpleLIcon} height="20" width="20" alt="more" />
            </div>
            <div
              className={`ml-6 bg-white h-[50px] w-[50px] rounded-[20px] flex items-center justify-center`}
            >
              <img src={logoPurpleRIcon} height="20" width="20" alt="more" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-7 md:mt-0 flex flex-col justify-center">
          <div className="flex flex-row">
            <div
              className={`${
                isHovered ? "jasonHover" : "bg-[#AF7CFF]"
              } transition-all duration-500 h-[100px] w-[100px] rounded-[40px] flex items-center justify-center`}
            >
              {isHovered ? (
                ""
              ) : (
                <img src={grooveIcon} height="90" width="90" alt="grove icon" className="inline-block" />
              )}
            </div>
            <div className="ml-3">
              <h1 className="text-[24px] font-semibold">Jason Makki</h1>
              {isHovered ? (
                <>
                  <p className="opacity-50">Engineer at FOGHORN LLC</p>
                  <p className="opacity-50">California</p>
                </>
              ) : (
                <>
                  <p className="opacity-50">Engineer at GROOVE</p>
                  <p className="opacity-50">San Francisco</p>
                </>
              )}
            </div>
          </div>
          <div className="max-w-[350px] mt-7">
            <p className="text-[16px] opacity-70">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since.Zwilt enabled us to
              deliver on time and they’ve been heavy hitters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
