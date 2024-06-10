import React from "react";
import Navbar from "../components/nabar";
import Hero from "../components/hero";
import OneStop from "../components/one_stop";
import HowItWorks from "../components/how_it_works";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OneStop />
      <HowItWorks />
    </div>
  );
};

export default Home;
