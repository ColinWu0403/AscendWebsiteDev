import React from "react";
import { About, Navbar, Footer, ImageSlider, Upcoming } from "../components";
import { slides } from "../constants/index";

const HomePage = () => {
  return (
    <div className="relative z-0">
      <div className="mb-8">
        <Navbar />
      </div>
      {/* Body */}
      <div className="min-h-screen flex flex-col">
        {/* <ImageSlider slides={slides} /> */}
        <About />
        <Upcoming />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
