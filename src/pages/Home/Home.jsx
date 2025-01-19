import React from "react";
import Navabar from "../../components/Navbar/Navabar";
import OfferNdWelcomeBar from "../../components/OfferNdWelcomeBar/OfferNdWelcomeBar";
import SliderBanner from "../../components/SliderBanner/SliderBanner";

const Home = () => {
  return (
    <>
      <OfferNdWelcomeBar />
      <Navabar />

      <div className="w-[90%] mx-auto  ">
        <SliderBanner></SliderBanner>
      </div>
    </>
  );
};

export default Home;
