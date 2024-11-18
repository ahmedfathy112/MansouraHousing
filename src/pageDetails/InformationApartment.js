import "./InformationApartment.css";
import Room from "../images/Room1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Owner from "../images/Owner.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import Email from "../images/EmailOwner.png";
import General from "../General-Information/General";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function InformationApartment() {
  return (
    <div className="container-fluid information-container">
      <div className="row carouselReverse">
        <div className="about">
          <h3 className="about-apartment">Apartments For Rent</h3>
          <h3 className="price-apartment">290.00 $</h3>
        </div>
        <div className="col-lg-9 col-md-9">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1000">
                <img src={Room} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={Room} class="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Room} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="small-images">
            <img src={Room} alt="no" className="image-s" />
            <img src={Room} alt="no" className="image-s" />
            <img src={Room} alt="no" className="image-s" />
            <img src={Room} alt="no" className="image-s" />
          </div>
        </div>
        <div className="call-owner col-lg-2 col-md-2">
          <img src={Owner} alt="noPhoto" className="image-owner mx-auto" />
          <h4 className="name-owner">Mohamed Kosper</h4>
          <h5 className="address-owner"> Mahalla EL Kubra</h5>
          <div className="flex flex-row bg-green-600 py-2 px-3 mb-3 rounded-lg text-white cursor-pointer mx-auto view-button">
            <FaPhoneAlt className="text-xl text-white my-auto mr-1" />
            <span className="text-phone">VIEW PHONE</span>
          </div>
          <div className="message-button ">
            {/* <img className="icon-email" src={Email} alt="noPhoto" /> */}

            <MdEmail className="text-blue-400 text-xl mr-1 my-auto" />

            <span className="text-email">SEND MESSAGE</span>
          </div>
        </div>
      </div>
      <div className="w-full mb-4">
        <General />
      </div>
    </div>
  );
}
export default InformationApartment;
