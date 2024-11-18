import React from "react";
import "./sign.css";
import { Container } from "react-bootstrap";
import logo from "../images/logoNavbar 1.png";
import { CiLocationOn } from "react-icons/ci";
import { GoProjectSymlink } from "react-icons/go";
import { FaHouseUser } from "react-icons/fa";
import { GiStarMedal } from "react-icons/gi";
import { Link } from "react-router-dom";
const Sign = () => {
  return (
    <div className="signUp flex justify-center items-center p-10 max-md:p-0">
      <Container className="container bg-[#FDFCFC]">
        <div className="leftSide">
          <div className="flex justify-center items-center">
            <img src={logo} className="my-3"></img>
          </div>
          <h4>Why should I Join Student Hostel?</h4>
          <p>
            To have the experience of “property”, “information” and “trust” in
            the real estate world all together…
          </p>
          {/* هنا جزء الايكونات  */}
          <div className="flex justify-center flex-row flex-wrap w-[100%]">
            <div className="flex justify-center items-center flex-col w-1/2 mt-5">
              <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] p-2 bg-yellow-400">
                <CiLocationOn className="text-3xl font-semibold text-white" />
              </div>
              <h6>Learn about location.</h6>
            </div>

            <div className="flex justify-center items-center flex-col w-1/2 mt-5">
              <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] p-2 bg-red-400">
                <FaHouseUser className="text-3xl font-semibold text-white" />
              </div>
              <h6>Find out the value of your house free of charge.</h6>
            </div>

            <div className="flex justify-center items-center flex-col w-1/2 mt-5">
              <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] p-2 bg-red-400">
                <GiStarMedal className="text-3xl font-semibold text-white" />
              </div>
              <h6>Discover houses that will improve your life quality.</h6>
            </div>
            <div className="flex justify-center items-center flex-col w-1/2 mt-5">
              <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] p-2 bg-yellow-400">
                <GoProjectSymlink className="text-3xl font-semibold text-white" />
              </div>
              <h6>Be aware of new projects.</h6>
            </div>
          </div>
        </div>
        <div className="w-[1px] h-[100vh] bg-black z-10 max-md:hidden"></div>
        {/* here sec of the signup form */}
        <div className="rightSide">
          <form className="signUpForm">
            <div>
              <button className="googleBtn">
                <svg
                  className="googleLogo"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1202_2187)">
                    <path
                      d="M5.85938 12.5C5.85938 11.2614 6.20063 10.1011 6.79351 9.10757V4.89331H2.57925C0.906641 7.06558 0 9.71299 0 12.5C0 15.287 0.906641 17.9344 2.57925 20.1067H6.79351V15.8924C6.20063 14.8989 5.85938 13.7386 5.85938 12.5Z"
                      fill="#FBBD00"
                    />
                    <path
                      d="M12.5 19.1406L9.57031 22.0703L12.5 25C15.2871 25 17.9344 24.0933 20.1067 22.4207V18.2109H15.8969C14.8947 18.806 13.7295 19.1406 12.5 19.1406Z"
                      fill="#0F9D58"
                    />
                    <path
                      d="M6.79434 15.8923L2.58008 20.1066C2.91123 20.5367 3.27183 20.9485 3.66201 21.3388C6.02295 23.6997 9.16196 24.9999 12.5008 24.9999V19.1405C10.0778 19.1405 7.9541 17.8358 6.79434 15.8923Z"
                      fill="#31AA52"
                    />
                    <path
                      d="M25 12.5C25 11.7396 24.9312 10.9776 24.7953 10.2355L24.6854 9.63501H12.5V15.4944H18.4303C17.8544 16.6399 16.9689 17.5746 15.8969 18.2111L20.1066 22.4209C20.5367 22.0897 20.9486 21.7291 21.3388 21.3389C23.6998 18.9779 25 15.8389 25 12.5Z"
                      fill="#3C79E6"
                    />
                    <path
                      d="M17.1957 7.80435L17.7135 8.32222L21.8567 4.17905L21.3389 3.66118C18.9779 1.30024 15.8389 0 12.5 0L9.57031 2.92969L12.5 5.85938C14.2737 5.85938 15.9414 6.5501 17.1957 7.80435Z"
                      fill="#CF2D48"
                    />
                    <path
                      d="M12.5009 5.85938V0C9.16201 0 6.023 1.30024 3.66201 3.66113C3.27183 4.05132 2.91123 4.46318 2.58008 4.89331L6.79434 9.10757C7.95415 7.16406 10.0778 5.85938 12.5009 5.85938Z"
                      fill="#EB4132"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1202_2187">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Connect with Google
              </button>
            </div>
            <div className="hr">
              <hr /> or <hr />
            </div>
            {/* name */}
            <div>
              <input
                className="name"
                type="text"
                name="name"
                placeholder="Name.."
              />
            </div>
            {/* email */}
            <div>
              <input
                className="email"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
            </div>
            {/* password */}
            <div>
              <input
                type="password"
                className="password"
                name="password"
                placeholder="Password"
              />
            </div>
            {/* password Again*/}
            <div>
              <input
                className="password"
                type="password"
                name="passwordAgain"
                placeholder="Password (Again)"
              />
            </div>
            <div className="agree">
              <input type="checkbox" name="agree" id="agree" />
              <label htmlFor="agree">
                <span>i agree to the Membership Terms</span>
              </label>
            </div>

            <div>
              <button className="SIgnUPBtn">SIGN UP</button>
            </div>
            <p>
              Already a member? <Link to="/login">Login now!</Link>
            </p>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Sign;
