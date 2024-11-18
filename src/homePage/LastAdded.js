import React from "react";
import houseImage from "../images/houseImage.png";
import { FaBed } from "react-icons/fa";
import { MdOutlineStairs } from "react-icons/md";

const FeaturedCard = () => {
  return (
    //   the card of the house
    <div className="w-1/5 m-4 rounded-lg shadow-md p-3 text-left flex flex-col max-md:w-full">
      {/* image of the house */}
      <img alt="houseImage" src={houseImage}></img>
      {/* price of the house */}
      <span className="text-[24px] font-semibold">299$</span>
      {/* type of the house */}
      <span className="text-[14px] font-medium">Apartment for rent</span>
      {/* adress of the house */}
      <span className="text-[10px] text-gray-500">London, Oxford St.</span>
      {/* publish date */}
      <span className="text-[10px] text-gray-500">26 November 2020</span>
      <div className="w-full flex flex-row mt-3">
        {/* number of beds */}
        <div className="flex flex-row mr-5">
          <FaBed className="my-auto mr-1" />
          <span className="text-[11px] ">3+1</span>
        </div>
        {/* number of the floor */}
        <div className="flex flex-row">
          <MdOutlineStairs className="my-auto mr-1" />
          <span className="text-[11px] ">7</span>
        </div>
      </div>
    </div>
  );
};

const Featured = () => {
  return (
    <div className="w-full mt-4">
      <div className="w-full text-left text-2xl font-medium">
        Featured Sales
      </div>
      <div className="w-full flex justify-center flex-row flex-wrap mt-3">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
};

export default Featured;
