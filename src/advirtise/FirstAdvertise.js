// FirstAdvertise.js
import React from "react";

const FirstAdvertise = ({ nextStep }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Advertise Your Property</h2>

      {/* Category Section */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Category</label>
        <select className="w-full border border-gray-300 p-2 rounded">
          <option>Housing</option>
          <option>Office</option>
          <option>Shop</option>
        </select>
      </div>

      {/* General Information Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">General Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter title"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Explanation</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter explanation"
              rows="3"
            ></textarea>
          </div>
          {/* Additional fields */}
          <div>
            <label className="block font-semibold mb-1">Floor</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Ground</option>
              <option>1st</option>
              <option>2nd</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Type</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Apartment</option>
              <option>House</option>
            </select>
          </div>
          {/* Add more fields as required */}
        </div>
      </div>

      {/* Location Information Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Location Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Province</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Select province</option>
              <option>London</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Neighborhood</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Select neighborhood</option>
              <option>Central</option>
            </select>
          </div>
        </div>
      </div>

      {/* Posting Photos Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Posting Photos</h3>
        <div className="border-dashed border-2 border-gray-300 p-4 text-center rounded">
          <p className="text-gray-500">You can add photos to your ad</p>
          <button className="bg-red-500 text-white py-2 px-4 mt-2 rounded">
            Upload from Computer
          </button>
          <p className="mt-4 text-sm text-gray-500">
            You can add 10 photos at most
          </p>
        </div>
      </div>

      {/* <button
        onClick={nextStep}
        className="bg-red-500 text-white p-2 px-4 rounded mt-4"
      >
        Next
      </button> */}
    </div>
  );
};

export default FirstAdvertise;
