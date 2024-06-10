import React from "react";
import starIcon from "../../assets/star-icon.svg";
import dashboardIcon from "../../assets/dashboard-icon.svg";
import starCustomerIcon from "../../assets/star-customer.svg";
import figmaIcon from "../../assets/figma.svg";
import graphicsIcon from "../../assets/graphics.svg";
import illustrationIcon from "../../assets/illustration-artist.svg";
import unrealEngineIcon from "../../assets/unreal-engine.svg";
import cinemaIcon from "../../assets/cinema.svg";
import logoBlackLIcon from "../../assets/logo-black-l.svg";

const Design = () => {
  return (
    <div className="flex flex-col md:flex-row w-full mt-20">
      <div className="w-full md:w-1/2 py-6">
        <h1 className="text-[20px] max-w-[300px] font-semibold">
          Explore Creative individuals with a keen eye for detail.
        </h1>
        <div className="mt-3 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={starIcon}
              className="inline"
              height="20"
              width="20"
              alt="star"
            />{" "}
            &nbsp; 989 Skills
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <img
              src={dashboardIcon}
              className="inline"
              height="20"
              width="20"
              alt="dashboard icon"
            />{" "}
            &nbsp; 45 Sub-Categories
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={starCustomerIcon}
              className="inline"
              height="20"
              width="20"
              alt="star customer"
            />{" "}
            &nbsp; 1011 Profiles
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 bg-white text-[14px] font-semibold rounded-[7px] px-6 py-4">
        <h1>Design & Creative</h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-3">
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F6F6] h-[70px] w-[70px] rounded-[15px] flex items-center justify-center">
              <img src={logoBlackLIcon} height="20" width="20" alt="more" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F6F6] h-[70px] w-[70px] rounded-full flex items-center justify-center">
              <img src={figmaIcon} height="30" width="30" alt="figma icon" />
            </div>
            <p className="mt-3 max-w-[100px] text-center">UX Designer</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F6F6] h-[70px] w-[70px] rounded-full flex items-center justify-center">
              <img
                src={graphicsIcon}
                height="30"
                width="30"
                alt="graphics icon"
              />
            </div>
            <p className="mt-3 max-w-[100px] text-center">Graphics Designer</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F6F6] h-[70px] w-[70px] rounded-full flex items-center justify-center">
              <img
                src={illustrationIcon}
                height="30"
                width="30"
                alt="illustration icon"
              />
            </div>
            <p className="mt-3 max-w-[100px] text-center">
              Illustration Artist
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F6F6] h-[70px] w-[70px] rounded-full flex items-center justify-center">
              <img
                src={unrealEngineIcon}
                height="30"
                width="30"
                alt="unreal engine icon"
              />
            </div>
            <p className="mt-3 max-w-[100px] text-center">Unreal Engine</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F6F6] h-[70px] w-[70px] rounded-full flex items-center justify-center">
              <img
                src={cinemaIcon}
                height="20"
                width="20"
                alt="cinema 4d icon"
              />
            </div>
            <p className="mt-3 max-w-[100px] text-center">Cinema 4D</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
