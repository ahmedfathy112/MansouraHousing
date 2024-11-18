import "./General.css";
function General() {
  return (
    <div className="row w-full  max-md:w-full">
      <div className=" general-information shadow-xl rounded-lg">
        <h5>General Information</h5>
        <div id="Information-All" className="max-md:w-full">
          <div className="information-left">
            <div className="information">
              <h6>published Date</h6>
              <h6>Advertise Status</h6>
              <h6>Housing Shape</h6>
              <h6>Number Of Room</h6>
            </div>
            <div className="answer">
              <h6>2 December 2024</h6>
              <h6>Rent</h6>
              <h6>Apartment</h6>
              <h6>3</h6>
            </div>
          </div>
          <div className="information-right ">
            <div className="information">
              <h6>Gross/Net M² </h6>
              <h6>Floor Location</h6>
              <h6>Available For Loan</h6>
            </div>
            <div className="answer">
              <h6>150 M² </h6>
              <h6>5</h6>
              <h6>Appropriate</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default General;
