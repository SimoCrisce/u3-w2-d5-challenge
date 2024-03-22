import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  ThermometerHalf,
  Wind,
  BrightnessHigh,
  Water,
  CloudFill,
  Thermometer,
  ThermometerHigh,
  Search,
} from "react-bootstrap-icons";
import "../App.css";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const Weather = function () {
  const convertToCelsius = function (kelvin) {
    return Math.round(kelvin - 273.15);
  };
  const [weather, setWeather] = useState(null);
  const [searchField, setSearchField] = useState("Palermo");

  const fetchWeather = function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchField}&APPID=257078ff8fb80d350bc0a029f39c7d1d`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((weatherData) => {
        setWeather(weatherData);
      })
      .catch((error) => console.log(error));
  };

  useEffect(fetchWeather, []);

  return (
    <Col xs={9} className="bg-dark text-white-50">
      <InputGroup className="mb-3 mt-5">
        <Form.Control
          id="input"
          type="search"
          placeholder="Cerca una città"
          aria-label="Search"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          className="border-0"
        />
        <Button variant="secondary" onClick={fetchWeather}>
          <Search className="d-block" />
        </Button>
      </InputGroup>
      {weather && (
        <>
          <Container className="text-white p-4 d-flex justify-content-between align-items-center">
            <div>
              <h3 className="my-3">{weather.name}</h3>
              <h2>{convertToCelsius(weather.main.temp)}°</h2>
            </div>
            <div>
              <BrightnessHigh id="sun-icon" className="text-warning " />
            </div>
          </Container>

          <Row className="pt-3 text-white">
            <Col xs={6}>
              <h4>Longitudine: {weather.coord.lon}°</h4>
            </Col>
            <Col xs={6}>
              <h4>Latitudine: {weather.coord.lat}°</h4>
            </Col>
          </Row>
          <section className="bg-secondary p-3 rounded-4 text-white">
            <h6 className="fs-6">CONDIZIONI DELL'ARIA</h6>
            <Row>
              <Col xs={6}>
                <div className="d-flex gap-1">
                  <div>
                    <ThermometerHalf />
                  </div>
                  <div className="d-flex flex-column">
                    <p className="m-0">Percepite</p>
                    <h3>{convertToCelsius(weather.main.feels_like)}°</h3>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div className="d-flex gap-1">
                  <div>
                    <Wind />
                  </div>
                  <div className="d-flex flex-column">
                    <p className="m-0">Vento</p>
                    <h3>{weather.wind.speed} km/h</h3>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div className="d-flex gap-1">
                  <div>
                    <CloudFill />
                  </div>
                  <div className="d-flex flex-column">
                    <p className="m-0">Cielo</p>
                    <h3>{weather.weather[0].main}</h3>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div className="d-flex gap-1">
                  <div>
                    <Water />
                  </div>
                  <div className="d-flex flex-column">
                    <p className="m-0">Umidità</p>
                    <h3>{weather.main.humidity}%</h3>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div className="d-flex gap-1">
                  <div>
                    <Thermometer />
                  </div>
                  <div className="d-flex flex-column">
                    <p className="m-0">Minime</p>
                    <h3>{convertToCelsius(weather.main.temp_min)}°</h3>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div className="d-flex gap-1">
                  <div>
                    <ThermometerHigh />
                  </div>
                  <div className="d-flex flex-column">
                    <p className="m-0">Massime</p>
                    <h3>{convertToCelsius(weather.main.temp_max)}°</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </>
      )}
    </Col>
  );
};

export default Weather;
