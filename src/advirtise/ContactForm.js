// ContactForm.js
import React from "react";

const ContactForm = ({ nextStep, prevStep }) => {
  return (
    <div className="max-w-full mx-auto p-8 bg-gray-50 shadow-md rounded-lg">
      <form className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name / Surname"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Mobile Number 2"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Mobile Number 3"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Telephone"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Telephone 2"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Telephone 3"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Fax"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-gray-700">
            I want to be informed about all announcements and campaigns via
            commercial electronic mail.
          </span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-2">E-mail</span>
              <input
                type="radio"
                name="contact-preference"
                className="form-radio text-red-500"
              />
            </div>
            <div className="flex items-center">
              <span className="mr-2">SMS</span>
              <input
                type="radio"
                name="contact-preference"
                className="form-radio text-red-500"
              />
            </div>
          </div>
        </div>
        {/* <div className="w-full flex justify-between">
          <button
            onClick={prevStep}
            className="bg-red-500 text-white p-2 px-4 rounded mt-4 mr-2"
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            className="bg-red-500 text-white p-2 px-4 rounded mt-4"
          >
            Next
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default ContactForm;
