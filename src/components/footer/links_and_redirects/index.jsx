import React from "react";
import logo from "../../../assets/logo1.svg";
import zwilt from "../../../assets/zwilt.svg";

const LinksAndRedirects = () => {
  return (
    <div className="md:w-1/3 flex flex-col">
      <h1 className="flex">
        <img src={zwilt} alt="name" height="70" width="70" className="" />{" "}
        <img
          src={logo}
          alt="logo"
          height="30"
          width="30"
          className="mt-2 ml-2"
        />
      </h1>
      <p className="opacity-70 mt-7">
        We take complex hiring processes - and simplify them. Connecting you to
        the world’s highly qualified talent pool.
      </p>
      <div className="mt-7 mb-4">
        <h3 className="text-[#b1aeae] font-semibold opacity-70 text-[14px] mb-5">
          LINKS AND REDIRECTS
        </h3>
        <button
          type="button"
          className="bg-[#292B34] w-36 py-2 rounded-[15px] text-[14px]"
        >
          Hire now
        </button>
        <button
          type="button"
          className="md:ml-3 bg-[#292B34] w-36 py-2 rounded-[15px] text-[14px]"
        >
          Apply now
        </button>
      </div>
    </div>
  );
};

export default LinksAndRedirects;
