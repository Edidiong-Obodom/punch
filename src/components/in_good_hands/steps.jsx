import React from "react";
import playDarkBgIcon from "../../assets/play-black-bg.svg";
import playIcon from "../../assets/play-white.svg";

const Steps = ({ id, opened, title, details, setOpen }) => {
  return (
    <div
      className={`w-full md:max-w-[460px] flex flex-col mt-2 px-4 py-4 border border-[#F0F0F0] rounded-md cursor-pointer ${
        id === opened ? "shadow-lg" : ""
      }`}
      onClick={() => setOpen(id)}
    >
      <div className="flex w-full">
        <div
          className={`${
            id === opened ? "bg-[#8BA4FD] " : "bg-[#ECECEC] "
          }flex items-center justify-center h-[60px] w-[60px] rounded-full`}
        >
          <img
            src={id === opened ? playIcon : playDarkBgIcon}
            height="15"
            width="15"
            alt="play dark"
          />
        </div>
        <div className="ml-5 flex-1 flex items-center">
          <h1 className="w-full">
            <span className="font-bold">Step {id}:</span> {title}
          </h1>
        </div>
      </div>
      {id === opened ? (
        <div className="max-w-[450px] mt-5">
          <p>{details}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Steps;
