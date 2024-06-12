import { useEffect, useState } from "react";
import frame from "../assets/frame.svg";
import base from "../assets/Union.svg";
import gif from "../assets/GIF_1.gif";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isIt, setIsIt] = useState(true);
  const [itStyle, setItStyle] = useState(
    "bg-[#C7F4C2] h-[100%] font-[700] p-3 md:py-3 md:px-4 rounded-[15px]"
  );
  const [designStyle, setDesignStyle] = useState(
    "font-[600] py-3 md:py-3 md:px-4 ml-2 mr-2 mr md:ml-0 md:mr-0"
  );
  const handleToggle = () => {
    isIt ? setIsIt(false) : setIsIt(true);
  };

  useEffect(() => {
    if (isIt) {
      setItStyle(
        "bg-[#C7F4C2] h-[100%] font-[700] p-3 md:py-3 md:px-4 rounded-[15px]"
      );
      setDesignStyle(
        "font-[600] py-3 md:py-3 md:px-4 ml-2 mr-2 mr md:ml-0 md:mr-0"
      );
    } else {
      setDesignStyle(
        "bg-[#C7F4C2] h-[100%] font-[700] p-3 md:py-3 md:px-4 rounded-[15px]"
      );
      setItStyle(
        "font-[600] py-3 md:py-3 md:px-4 ml-2 mr-2 mr md:ml-0 md:mr-0"
      );
    }
  }, [isIt]);
  return (
    <section className="mt-16 md:mt-32">
      <div className="eddyContainer flex flex-col items-center justify-center">
        <h1 className="font-bold max-w-[700px] text-center text-[26px] md:text-[54px] md:leading-[64px]">
          Finding the right fit{" "}
          <img
            src={gif}
            alt="first gif"
            className="inline h-[2rem] w-[3rem] md:h-[3rem] md:w-[4.5rem]"
          />{" "}
          has <span className="">never been easier</span>
        </h1>
        <div className="w-[280px] md:w-[400px] xl:w-[582px] text-center mt-5">
          <p className="text-[18px] text-center md:text-[22px] text-[#202229] font-[400px] leading-7">
            With our rigorous pre-vetting process, you'll never have to worry
            about finding the ideal candidate ever again.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-[280px] md:w-[400px] xl:w-[582px] flex mt-8 md:mt-10">
          <div className="relative w-1/2 flex flex-1 border border-[#F0F0F0] rounded-[15px] items-center pl-10">
            <span className="placeholder-text absolute pointer-events-none">
              <span className="font-bold">Looking for</span>
              <span className="text-[#959595]"> design |</span>
            </span>
            <input
              type="text"
              className="input-field w-full text-[16px] pl-0 outline-none"
              onFocus={(e) => (e.target.previousSibling.style.display = "none")}
              onBlur={(e) => {
                if (e.target.value === "")
                  e.target.previousSibling.style.display = "block";
              }}
            />
            <button className="flex justify-end items-center h-full bg-transparent border-none">
              <img src={frame} height="80" width="80" alt="frame" />
            </button>
          </div>
        </div>

        <div className="w-[280px] md:w-[582px] xl:w-[920px] bg-[#F8F8F8] flex flex-col justify-center items-center text-[14px] md:text-[16px] rounded-[15px] pt-4 pb-6 px-0 md:px-[80px] mt-8 md:mt-10">
          <div className="text-[#202229] bg-[#F2F2F2] flex justify-around items-center rounded-[15px]">
            <button type="button" className={itStyle} onClick={handleToggle}>
              IT & Development
            </button>
            <button
              type="button"
              className={designStyle}
              onClick={handleToggle}
            >
              Design <span className="hidden md:inline">and</span>
              <span className="inline md:hidden">&</span> Creative
            </button>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between mt-4 text-[#959595]">
            <ul className="flex flex-col gap-2 mt-3 md:mt-0">
              <li className="text-center md:text-left">
                <Link href={"/"} className="hover:text-sky-500 cursor-pointer">
                  Python Developer
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href={"/"} className="hover:text-sky-500 cursor-pointer">
                  Shopify Developer
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link
                  href={"/"}
                  className="hover:text-sky-500 text-[#202229] font-bold cursor-pointer"
                >
                  MERN Stack Developer
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href={"/"} className="hover:text-sky-500 cursor-pointer">
                  Full Stack Developer
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-2 mt-3 md:mt-0">
              <li className="text-center md:text-left">
                <Link href={"/"} className="hover:text-sky-500 cursor-pointer">
                  Data Scientist
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href={"/"} className="hover:text-sky-500 cursor-pointer">
                  Front End Developer
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href={"/"} className="hover:text-sky-500 cursor-pointer">
                  Shopify Developer
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href={"/"} className="hover:text-sky-500 cursor-pointer">
                  Python Developer
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-2 mt-3 md:mt-0">
              <li className="text-center md:text-left">
                <Link href={"/"} className="hover:text-sky-500 cursor-pointer">
                  Shopify Developer
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href={"/"} className="hover:text-sky-500 cursor-pointer">
                  Python Developer
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href={"/"} className="hover:text-sky-500 cursor-pointer">
                  Full Stack Developer
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link
                  href={"/"}
                  className="hover:text-sky-500 text-[#202229] font-bold cursor-pointer"
                >
                  Explore More
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center pt-16 ">
        <img src={base} height="70" alt="base" />
      </div>
    </section>
  );
};

export default Hero;
