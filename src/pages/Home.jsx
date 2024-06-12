import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import OneStop from "../components/one_stop";
import HowItWorks from "../components/how_it_works";
import InGoodHands from "../components/in_good_hands";
import Footer from "../components/footer";
import Faqs from "../components/faqs";
import WhyChooseCarousel from "../components/carousel";
import StartYourJourney from "../components/start_your_journey";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OneStop />
      <HowItWorks />
      <InGoodHands />
      <StartYourJourney />
      <WhyChooseCarousel />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
