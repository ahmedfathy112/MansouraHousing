import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logoNavbar 1.png";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full py-2 px-6 bg-white shadow-md">
      <nav className="w-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img alt="Logo" src={logo} className="w-32" />
        </Link>

        {/* Links for large screens */}
        <div className="hidden md:flex items-center">
          <Link
            to="/"
            className="font-medium mr-4 text-black hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="font-medium mr-4 text-black hover:text-blue-500"
          >
            Shop
          </Link>
          <Link
            to="/advirtise"
            className="font-medium mr-4 text-black hover:text-blue-500"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="font-medium mr-4 text-black hover:text-blue-500"
          >
            Contact Us
          </Link>
        </div>

        {/* Profile icon */}
        <Link to="/login" className="hidden md:block">
          <CgProfile className="text-2xl cursor-pointer" />
        </Link>

        {/* Toggle button for small screens */}
        <button className="block md:hidden text-2xl" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 z-50`}
      >
        <div className="p-6 flex flex-col space-y-6">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-blue-500">
              Sutdent Hostel
            </h2>
            <button className="text-2xl text-gray-600" onClick={toggleSidebar}>
              <FaTimes />
            </button>
          </div>

          {/* Links */}
          <Link
            to="/"
            className="font-medium text-black hover:text-blue-500"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="font-medium text-black hover:text-blue-500"
            onClick={toggleSidebar}
          >
            Shop
          </Link>
          <Link
            to="/advirtise"
            className="font-medium text-black hover:text-blue-500"
            onClick={toggleSidebar}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="font-medium text-black hover:text-blue-500"
            onClick={toggleSidebar}
          >
            Contact Us
          </Link>

          {/* Profile icon */}
          <Link
            to="/login"
            className="font-medium text-black hover:text-blue-500"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
