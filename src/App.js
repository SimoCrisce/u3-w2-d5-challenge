import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Weather from "./components/Weather";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid>
      <Row className="vh-100 d-flex justify-content-between">
        <LeftSidebar />
        <Weather />
        <RightSidebar />
      </Row>
    </Container>
  );
}

export default App;
