import React from "react";
import heroImage from "../images/MainImage.png";

const HeroSec = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {/* this is the image of the hero section */}
      <img
        alt="heroImage"
        src={heroImage}
        className="absolute inset-0 h-full w-full max-md:h-full max-md:w-fit"
      ></img>
      {/* here is the content of the hero section  */}
      <div className="z-10">
        <h1 className="text-5xl font-semibold text-center text-white">
          Your dream <br /> house is here
        </h1>
        <input
          type="search"
          title="Search here for house"
          className="mt-6 py-2 px-4 w-full rounded-lg outline-none"
        />
      </div>
    </div>
  );
};

export default HeroSec;
