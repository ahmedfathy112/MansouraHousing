// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Apartments.css";
import imageApartment from "../images/apartment1.jpg";
import iconMeter from "../images/iconmeter.png";
import iconStairs from "../images/iconstairs.png";
import NavFilter from "./NavFilter";
import Next from "./Next";
import { FaHome } from "react-icons/fa";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
function Apartments() {
  return (
    <>
      <NavFilter />
      <div className="container-fluid apartment-container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="card">
              <img
                src={imageApartment}
                className="card-img-top"
                alt="NoImage"
              />
              <div className="card-body">
                <h3 className="card-title">290.000 $</h3>
                <h5 className="card-title">Apartment for rent</h5>
                <h6 className="card-date">1 July 2024</h6>
                <div className="flex flex-row ">
                  {/* <FontAwesomeIcon icon={faHome} className="icon-room" /> */}
                  <FaHome />
                  <span className="text">3 room </span>
                  <img
                    src={iconStairs}
                    alt="no"
                    className="icon-stairs  mb-1"
                  />
                  <span className="text">5 floor </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="card">
              <img
                src={imageApartment}
                className="card-img-top"
                alt="NoImage"
              />
              <div className="card-body">
                <h3 className="card-title">290.000 $</h3>
                <h5 className="card-title">Apartment for rent</h5>
                <h6 className="card-date">1 July 2024</h6>
                <div className="flex flex-row ">
                  {/* <FontAwesomeIcon icon={faHome} className="icon-room" /> */}
                  <FaHome />
                  <span className="text">3 room </span>
                  <img
                    src={iconStairs}
                    alt="no"
                    className="icon-stairs  mb-1"
                  />
                  <span className="text">5 floor </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="card">
              <img
                src={imageApartment}
                className="card-img-top"
                alt="NoImage"
              />
              <div className="card-body">
                <h3 className="card-title">290.000 $</h3>
                <h5 className="card-title">Apartment for rent</h5>
                <h6 className="card-date">1 July 2024</h6>
                <div className="flex flex-row ">
                  {/* <FontAwesomeIcon icon={faHome} className="icon-room" /> */}
                  <FaHome />
                  <span className="text">3 room </span>
                  <img
                    src={iconStairs}
                    alt="no"
                    className="icon-stairs  mb-1"
                  />
                  <span className="text">5 floor </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="card">
              <img
                src={imageApartment}
                className="card-img-top"
                alt="NoImage"
              />
              <div className="card-body">
                <h3 className="card-title">290.000 $</h3>
                <h5 className="card-title">Apartment for rent</h5>
                <h6 className="card-date">1 July 2024</h6>
                <div className="flex flex-row ">
                  {/* <FontAwesomeIcon icon={faHome} className="icon-room" /> */}
                  <FaHome />
                  <span className="text">3 room </span>
                  <img
                    src={iconStairs}
                    alt="no"
                    className="icon-stairs  mb-1"
                  />
                  <span className="text">5 floor </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Next />
    </>
  );
}
export default Apartments;
