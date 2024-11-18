import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 !text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Homefast</h3>
          <ul className="">
            <li className="mb-2">
              <a href="#" className="hover:underline text-gray-300">
                About Us
              </a>
            </li>{" "}
            <li className="mb-2">
              <a href="#" className="hover:underline text-gray-300">
                Human Resources
              </a>
            </li>
            <li>
              <Link to="/advirtise" className="hover:underline text-gray-300">
                Advertise
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul>
            <li className="mb-2">
              <Link href="/shop" className="hover:underline text-gray-300">
                Our Special Services
              </Link>
            </li>

            <li className="mb-2">
              <Link to="/shop" className="hover:underline text-gray-300">
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Other</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline text-gray-300">
                Terms of Use
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline text-gray-300">
                Operation Guide
              </a>
            </li>

            <li>
              <Link to="/contact" className="hover:underline text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
