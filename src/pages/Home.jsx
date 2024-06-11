import React from "react";
import Navbar from "../components/nabar";
import Hero from "../components/hero";
import OneStop from "../components/one_stop";
import HowItWorks from "../components/how_it_works";
import InGoodHands from "../components/in_good_hands";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OneStop />
      <HowItWorks />
      <InGoodHands />
    </div>
  );
};

export default Home;
