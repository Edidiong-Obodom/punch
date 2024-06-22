import React, { useState } from "react";

const AnimatedButton = ({
  buttonStyle = {
    normalStyle: "h-[60px] w-full md:max-w-[250px] py-6 flex items-center",
    isHoveredStyle: "bg-[#202229] rounded-[20px]",
  },
  iconDivStyle = "bg-[#202229] h-[60px] w-[60px] rounded-[20px] flex items-center justify-center",
  text,
  textStyle = {
    normalStyle: "ml-3 text-[20px] font-semibold",
    isHoveredStyle: "text-white",
  },
  icon,
  iconStyle = { height: "15", width: "15", alt: "any" },
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const { height, width, alt } = iconStyle;
  return (
    <button
      type="button"
      className={`${buttonStyle.normalStyle} cursor-pointer ${
        isHovered ? `${buttonStyle.isHoveredStyle}` : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`${iconDivStyle} transition-all duration-500 ${
          isHovered ? "text-slide-out" : "text-slide-return"
        }`}
      >
        <img src={icon} height={height} width={width} alt={alt} />
      </div>
      <h1
        className={`${textStyle.normalStyle} transition-all duration-500 ${
          isHovered
            ? `text-slide ${textStyle.isHoveredStyle}`
            : "text-slide-out-return"
        }`}
      >
        {text}
      </h1>
    </button>
  );
};

export default AnimatedButton;
