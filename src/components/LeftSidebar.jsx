import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { CloudSunFill, ListUl, MapFill, Sliders2, Wind } from "react-bootstrap-icons";

const LeftSidebar = function () {
  return (
    <Col xs={12} sm={1} className="bg-dark text-white-50">
      <div className="d-flex justify-content-center">
        <Nav className="d-flex justify-content-center align-items-center flex-md-column">
          <Nav.Item className="my-4 fs-2">
            <Nav.Link className="d-flex flex-column align-items-center text-white-50">
              <Wind />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="d-flex flex-column align-items-center text-white-50">
              <CloudSunFill className="fs-4" />
              Meteo
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="d-flex flex-column align-items-center text-white-50">
              <ListUl className="fs-4" />
              Città
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="d-flex flex-column align-items-center text-white-50">
              <MapFill className="fs-4" />
              Mappa
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="d-flex flex-column align-items-center text-white-50">
              <Sliders2 className="fs-4" />
              Imp.
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Col>
  );
};

export default LeftSidebar;
