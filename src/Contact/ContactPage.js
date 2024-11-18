import React from "react";
import contactImage from "../images/ContactImage.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";
import * as Swal from "sweetalert2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "please fill all fields",
        confirmButtonText: "ok",
      });
      return;
    }

    emailjs
      .send(
        "service_p4lgp52",
        "template_lcuiv89",
        formData,
        "Qy_gtKV_i7kNrc_-_"
      )
      .then(
        (response) => {
          Swal.fire({
            icon: "success",
            title: "Message sent!",
            confirmButtonText: "Ok",
          });
          setFormData({ fullName: "", email: "", message: "" });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "there`s somthing wrong happend!",
            text: "please try again",
            confirmButtonText: "Ok",
          });
        }
      );
  };

  return (
    <div className="w-full flex justify-evenly my-4 max-md:justify-center max-md:flex-col">
      <div className="h-[600px]">
        <img src={contactImage} className="h-full"></img>
      </div>
      <div className="w-[60%] flex justify-start items-center flex-col mt-[5%]">
        <h1 className="text-[#00054B] text-5xl font-bold max-md:text-center max-md:text-3xl">
          CONTACT US
        </h1>
        <div className="flex w-[90%] flex-row justify-evenly mt-7 max-md:flex-col max-md:justify-center max-md:w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-md:justify-center"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border-b-[2px] border-[#00054B] pb-4 text-xl outline-none px-1 mt-5 w-[350px] max-md:w-[250px]"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="border-b-[2px] border-[#00054B] pb-4 text-xl outline-none px-1 mt-5 w-[350px] max-md:w-[250px]"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="border-b-[2px] border-[#00054B] pb-4 text-xl outline-none px-1 mt-5 w-[350px] max-md:w-[250px]"
            />
            <button
              type="submit"
              className="bg-[#00054B] py-2 px-3 text-white text-xl rounded-xl w-[200px] mt-10"
            >
              Contact Us
            </button>
          </form>
          <div className="flex flex-col justify-start mt-10 max-md:justify-center max-md:mt-10">
            <div className="text-[#00054B]">
              <h2 className="text-2xl font-bold mb-2">Contact</h2>
              <span className="text-[19px]">hi@green.com</span>
            </div>
            <div className="text-[#00054B]">
              <h2 className="text-2xl font-bold mb-2 mt-3">Basid In</h2>
              <span className="text-[19px]">Mansoura University</span>
            </div>
            <div className="flex flex-row mt-10">
              <a href="#" className="text-3xl mr-5">
                <FaFacebook />
              </a>
              <a href="#" className="text-3xl mr-5">
                <FaInstagram />
              </a>
              <a href="#" className="text-3xl mr-5">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
