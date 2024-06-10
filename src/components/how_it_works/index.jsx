import React from "react";
import quoteIcon from "../../assets/quote.svg"

const HowItWorks = () => {
  return (
    <section className="slanted-border relative h-[500px] bg-[#202229] text-white">
      <img
        src={quoteIcon}
        height="180"
        width="180"
        alt="quote icon"
        className="absolute top-0 right-2"
      />
      <div className="slanted-border-null">
        <h1>HowItWorks</h1>
      </div>
    </section>
  );
};

export default HowItWorks;
