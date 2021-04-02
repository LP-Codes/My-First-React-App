import React, { useState } from "react";
import Clock from "react-live-clock";
import "./Weather.css";
import { useCallback } from "react";
import { API_KEY } from "./Api";

export default function Weather() {
  const [city1, setcity1] = useState("");
  const [city, setcity] = useState("");
  const [currentweather, setcurrentweather] = useState("");
  const [icon, seticon] = useState("");
  const [weathertext, setweathertext] = useState("");
  const [humidity, sethumidity] = useState("");
  const [wind, setwind] = useState("");
  const [backsp, setbacksp] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const lpsearch = useCallback(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    if (city) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.cod === "404") {
            console.info("City Not found");
          } else {
            // console.log(data);
            setcurrentweather(data.main.temp);
            setweathertext(data.weather[0].description);
            seticon(data.weather[0].icon);
            setcity1(data.sys.country);
            sethumidity(data.main.humidity);
            setwind(data.wind.speed);
            // setcity("");
          }

          // setcity("");
        });
    }
  });

  let inputhndl = (event) => {
    // console.log(event.target.value);
    setcity(event.target.value);
  };

  // useEffect(() => {
  //   lpsearch();
  // }, [city, lpsearch]);

  return (
    <div>
      <h5 className="text-center alert-danger font-weight-bolder ">
        {" "}
        <Clock format={"dddd, DD  MMMM   , YYYY, h:mm:ss"} ticking={true} />
      </h5>
      <div className="container-fluid   ">
        <h1 className="text-center  font-weight-bolder alert-warning ">
          Weather-App
        </h1>{" "}
      </div>
      <div className="lpcentered   ">
        <h2 className="alert-info text-capitalize text-center ">
          Enter City's{" "}
          <i className="fas fa-city text-secondary text-danger fa-2x"></i> Name
        </h2>

        <input
          onKeyDown={(e) => {
            // console.log(e.key + e.keyCode);
            // const mm = e.key;
            setbacksp(e.key);
            setcurrentweather("");
            sethumidity("");
            setwind("");
            seticon("");
            setweathertext("");
            
            setcity1("")
            // console.log(mm);
          }}
          onChange={inputhndl}
          value={city}
          placeholder="Enter City's Name  Here to display weather data"
          className="form-control btn-outline-secondary font-weight-bolder mb-4 mt-4"
        ></input>
        <button
          className="form-control btn-success font-weight-bold font-weight-bolder "
          onClick={lpsearch}
        >
          Search <i className="fas fa-search  "></i>
        </button>

        {city ? (
          <div className="text-center ">
            <h3 className="alert-secondary text-capitalize font-weight-bold">
              <i class="fas fa-map-marker-alt text-danger"></i> {city}    
              <img   className="ml-2" src={`https://www.countryflags.io/${city1}/shiny/64.png`} alt="" srcset=""/>
            </h3>

            <h4 className="text-capitalize alert-info ">
              {" "}
             Current  Temperature <i class="fas fa-temperature-low"></i>{" "}
              {currentweather} <span>&#8451;</span> Humidty{" "}
              <i class="fas fa-tint"></i> {humidity} %  WindSpeed{" "}
              <i class="fas fa-wind"></i> {wind} km/h{" "}
            </h4>
            <h3 className="bg-dark text-light">
              {weathertext}{" "}
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt=""
                style={{ backgroundColor: "lightblue" }}
              />
            </h3>
          </div>
        ) : (
          // eslint-disable-next-line jsx-a11y/heading-has-content
          <h5 className="alert-warning text-capitalize text-center"></h5>
        )}
        {backsp === "Backspace" ? (
          <h5 className="alert-warning text-capitalize text-center">
            Click Search After Entering city name
          </h5>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
