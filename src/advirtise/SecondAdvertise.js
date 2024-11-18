// FirstAdvertise.js
import React from "react";
import Image1 from "../images/AdvirtiseImage1.png";
import Image2 from "../images/AdvirtiseImage2.png";
import Image3 from "../images/AdvirtiseImage.png";

const SecondAdvertise = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Family House For Sale</h2>
      <div className="my-4">
        <div className="grid grid-cols-3 gap-2">
          <img src={Image1} alt="Living Room" className="w-full h-auto" />
          <img src={Image2} alt="Interior" className="w-full h-auto" />
          <img src={Image3} alt="Bedroom" className="w-full h-auto" />
        </div>
      </div>
      <div className="my-4 w-full flex justify-center items-center">
        <div className="w-[75%] py-4 px-7 bg-[#FFFFFF] drop-shadow-lg -translate-y-12 max-md:w-full max-md:-translate-y-1">
          <h2 className="text-[24px] font-medium">Family House For Sale</h2>
          <p className="text-gray-500 text-[18px]">London, Lambeth, Prince's</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-gray-400 font-medium text-[14px]">
                Advertise No:
                <span className="font-medium text-black">01234</span>
              </p>
              <p className="text-gray-400 font-medium text-[14px]">
                Published Date:
                <span className="font-medium text-black"> 2 December 2020</span>
              </p>
              <p className="text-gray-400 font-medium text-[14px]">
                Advertise Status:
                <span className="font-medium text-black">Sale</span>
              </p>
              <p className="text-gray-400 font-medium text-[14px]">
                Housing Shape:
                <span className="font-medium text-black"> Apartment</span>
              </p>
              <p className="text-gray-400 font-medium text-[14px]">
                Rooms + Living Room:
                <span className="font-medium text-black"> 4+1</span>
              </p>
            </div>
            <div>
              <p className="text-gray-400 font-medium text-[14px]">
                Advertise No:
                <span className="font-medium text-black">01234</span>
              </p>
              <p className="text-gray-400 font-medium text-[14px]">
                Published Date:
                <span className="font-medium text-black"> 2 December 2020</span>
              </p>
              <p className="text-gray-400 font-medium text-[14px]">
                Advertise Status:
                <span className="font-medium text-black">Sale</span>
              </p>
              <p className="text-gray-400 font-medium text-[14px]">
                Housing Shape:
                <span className="font-medium text-black"> Apartment</span>
              </p>
              <p className="text-gray-400 font-medium text-[14px]">
                Rooms + Living Room:
                <span className="font-medium text-black"> 4+1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 w-full flex justify-center items-center">
        <div className="w-[75%] py-4 px-7 bg-[#FFFFFF] drop-shadow-lg max-md:w-full">
          <h3 className="text-lg font-semibold">Explanation</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
            convallis tellus pellentesque non odio consectetur bibendum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondAdvertise;
