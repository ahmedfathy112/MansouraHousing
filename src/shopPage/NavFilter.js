import Container from "react-bootstrap/Container";
import { Form, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
// import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Nav.css";
function NavFilter() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mt-4">
      <Container
        fluid
        className="NavContainer tertiary shadow p-3 mb-2 bg-body rounded"
      >
        {/* filter left => contain Form Select and price */}
        <div className="filter-left ">
          <Form.Select
            aria-label="Default select example"
            className="number-room me-3 "
          >
            <option>Number Of Room</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            className="Category me-3 "
          >
            <option>Category</option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </Form.Select>
          <Form className="d-flex  ">
            <Form.Control
              type="number"
              placeholder="Price $"
              className=" price me-3"
              aria-label="price"
            />
          </Form>
        </div>
        {/* filter right => contain search and button filter */}
        <div className="filter-right">
          <Form className="d-flex search-box">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-5 search"
              aria-label="Search"
            />
            {/* <FontAwesomeIcon icon={faSearch} className="icon-search" /> */}
          </Form>
          {/* <FontAwesomeIcon
            icon={faFilter}
            className="button-filter mt-2 me-5"
          /> */}
        </div>
      </Container>
    </Navbar>
  );
}
export default NavFilter;
