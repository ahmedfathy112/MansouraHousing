import React from "react";
import "./logIn.css";
import { Container } from "react-bootstrap";
import logo from "../images/logoNavbar 1.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="logInPage">
      <Container className="flex justify-center items-center ">
        <form className="loginForm shadow-xl min-h-[80vh]">
          <div className="w-full flex justify-center items-center">
            <img src={logo}></img>
          </div>
          {/* email  */}
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
              className="password"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div>
            <a href="#">I forget my password</a>
          </div>
          <div>
            <button className="loginBtn">LOGIN</button>
          </div>
          <div className="hr">
            <hr /> or <hr />
          </div>
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
          <div>
            <span>Still not a member?</span>{" "}
            <Link to="/signUp">Sign Up Now ?</Link>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;
