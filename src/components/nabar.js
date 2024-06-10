import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#525AA0] text-white eddyNav shadow-lg mt-8 h-[60px] rounded-2xl">
      <div className="w-[100%] h-[100%] flex flex-row justify-between items-center">
        <div className="flex mr-4 w-[1/3]">
          <span className="text-[30px] font-extrabold">zwilt</span>
        </div>
        <div className="flex flex-row space-x-7 text-[13px] w-[1/3]">
          <div>Find Work</div>
          <div>Find Talent</div>
          <div>Articles</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
        <div className="flex flex-row justify-between items-center] w-[1/3]">
          <div className="text-[13px]">Log In</div>
          <button className="bg-white text-black w-24 py-2 rounded-2xl">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
