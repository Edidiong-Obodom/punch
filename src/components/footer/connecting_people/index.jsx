import React from "react";

const ConnectingPeople = () => {
  return (
    <div className="md:w-3/5 mt-16 md:mt-0">
      <h1 className="text-[30px] md:text-[46px] font-semibold leading-snug md:leading-[64px]">
        Connecting the right people to the right businesses.
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-7 md:mt-20">
        <div>
          <ul>
            <li className="text-[14px] text-[#b1aeae] font-semibold opacity-70">
              PLATFORM
            </li>
            <li className="mt-6">Find Work</li>
            <li className="mt-6">Find Talent</li>
            <li className="mt-6">Categories</li>
            <li className="mt-6">About Us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-[14px] text-[#b1aeae] font-semibold opacity-70">
              CATEGORIES
            </li>
            <li className="mt-6">Data Science</li>
            <li className="mt-6">IT & Networking</li>
            <li className="mt-6">Categories</li>
            <li className="mt-6">Web & Mobile</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-[14px] mt-6 md:mt-0 text-[#b1aeae] font-semibold opacity-70">
              HELP
            </li>
            <li className="mt-6">FAQs</li>
            <li className="mt-6">Contact Us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-[14px] mt-6 md:mt-0 text-[#b1aeae] font-semibold opacity-70">
              GET IN TOUCH @
            </li>
            <li className="mt-6">Instagram</li>
            <li className="mt-6">LinkedIn</li>
            <li className="mt-6">Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConnectingPeople;
