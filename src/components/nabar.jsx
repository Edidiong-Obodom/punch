import React, { useState } from "react";
import logo from "../assets/logo1.svg";
import zwilt from "../assets/zwilt.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <nav className="bg-[#525AA0] text-white eddyNav shadow-lg mt-8 h-[fit-content] py-4 md:h-[60px] rounded-2xl">
      <div className="flex w-[100%] h-[100%] flex-row justify-between items-center">
        <div className="flex mr-4 w-[1/3] items-center gap-1">
          <img src={zwilt} alt="name" height="70" width="70" className="" />{" "}
          <img src={logo} alt="logo" height="30" width="30" className="mt-2" />
        </div>
        {/* Medium to big screens */}
        <div className="hidden md:flex flex-row space-x-7 text-[13px] w-[1/3]">
          <div>Find Work</div>
          <div>Find Talent</div>
          <div>Articles</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
        <div className="hidden md:flex flex-row justify-between items-center w-[1/3] gap-4">
          <div className="text-[13px] cursor-pointer">Log In</div>
          <button className="bg-white text-black w-24 py-2 rounded-2xl">
            Join Now
          </button>
        </div>
        {/* Medium to big screens */}

        {/* Small screens */}
        <button
          type="button"
          className="block md:hidden"
          onClick={handleToggle}
        >
          {isOpen ? (
            <IoMdClose className="text-[2rem] font-bold" />
          ) : (
            <GiHamburgerMenu className="text-[1.5rem]" />
          )}
        </button>
        {/* Small screens */}
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-5`}>
        <ul>
          <li className="mt-3">Find Work</li>
          <li className="mt-3">Find Talent</li>
          <li className="mt-3">Articles</li>
          <li className="mt-3">About Us</li>
          <li className="mt-3">Contact Us</li>
        </ul>
        <div className="cursor-pointer mt-3">Log In</div>
        <button className="bg-white w-full text-center text-black py-2 rounded-2xl mt-3">
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
