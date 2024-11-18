import { Link } from "react-router-dom";
import logo from "../images/logoNavbar 1.png";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="w-full py-2 px-6">
      <nav className="w-full flex justify-between">
        {/* logo of the website */}
        <Link to="/">
          <img alt="Logo" src={logo}></img>
        </Link>
        {/* links of the navBar */}
        <div className="my-auto">
          <Link to="/" className="font-medium mr-2 text-black">
            Home
          </Link>
          <Link to="/shop" className="font-medium mr-2 text-black">
            Shop
          </Link>
          <Link to="/advirtise" className="font-medium mr-2 text-black">
            About Us
          </Link>
          <Link to="/contact" className="font-medium mr-2 text-black">
            Contact Us
          </Link>
        </div>
        {/* profile icon */}
        <Link to="/login">
          <CgProfile className="text-2xl cursor-pointer my-auto" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
