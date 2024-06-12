import React, { useState, useEffect, useRef } from "react";
import logoTransRIcon from "../../assets/logo-trans-r.svg";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length]);

  const handleDoubleClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="relative w-full md:w-2/3 ml-auto"
      onDoubleClick={handleDoubleClick}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              className="w-full flex-shrink-0 flex flex-col md:flex-row rounded-xl bg-white"
              key={index}
            >
              <div className="md:w-1/2 px-[40px] py-[20px] mb-16 md:mb-0">
                <h1 className="text-[24px] md:text-[32px] md:max-w-[300px] font-bold">
                  {image.title}
                </h1>
                <ul className="mb-12 mt-6">
                  {image.list.map((list, i) => (
                    <li key={i} className="relative mt-3 flex">
                      <img
                        src={image.rectangle}
                        height="20"
                        width="20"
                        alt="rectangle"
                        className="inline absolute top-[0.6rem]"
                      />{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="">{list}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`h-[70px] w-full md:max-w-[250px] py-6 flex items-center cursor-pointer ${
                    isHovered ? "bg-[#202229] rounded-[30px]" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div
                    className={`bg-[#202229] h-[70px] w-[70px] rounded-[30px] flex items-center justify-center transition-all duration-500 ${
                      isHovered ? "text-slide-out" : "text-slide-return"
                    }`}
                  >
                    <img
                      src={logoTransRIcon}
                      height="20"
                      width="20"
                      alt="more"
                    />
                  </div>
                  <h1
                    className={`ml-3 text-[20px] font-semibold transition-all duration-500 ${
                      isHovered
                        ? "text-slide text-white"
                        : "text-slide-out-return"
                    }`}
                  >
                    Learn More
                  </h1>
                </button>
              </div>
              <img
                src={image.image}
                alt={`Slide ${index}`}
                className="md:w-1/2 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
