import React from "react";
import logo from "../../assets/logo1.svg";

const Questions = ({ id, type, subType, question, active, setActive }) => {
  return (
    <div
      className={`cursor-pointer border-y border-[#e5e2e2] flex h-[70px] items-center ${
        id === active ? "bg-[#E8E8E8]" : ""
      }`}
      onClick={() => setActive(id)}
    >
      <div
        className={`md:w-2/12 h-full font-bold hidden md:flex justify-center items-center ${
          type ? "border-r border-[#cbc6c6]" : ""
        } ${id === 5 ? "bg-[#E8E8E8]" : ""}`}
      >
        <h1>{type}</h1>
      </div>
      <div
        className={`md:w-3/12 h-full font-bold  hidden md:flex justify-center items-center ${
          subType ? "border-r border-[#cbc6c6]" : ""
        }`}
      >
        {subType}
      </div>
      <div className="w-full flex flex-row pl-[8%]">
        <div className="w-5/6">{question}</div>
        {id === active ? (
          <div className="w-1/6">
            <img
              src={logo}
              alt="logo"
              height="15"
              width="15"
              className="inline"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Questions;
