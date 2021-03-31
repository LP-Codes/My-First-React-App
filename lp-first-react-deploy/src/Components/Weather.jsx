import React, { useState, useEffect } from "react";
import Clock from "react-live-clock";
import "./Weather.css";
import { useCallback } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API_KEY } from "./Api";

export default function Weather() {
  const [city1, setcity1] = useState("");
  const [city, setcity] = useState("");
  const [currentweather, setcurrentweather] = useState("");
  const [icon, seticon] = useState("");
  const [weathertext, setweathertext] = useState("");
  const [humidity, sethumidity] = useState("");
 const [wind, setwind] = useState("")

  const lpsearch = useCallback(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    if (city) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.cod === "404") {
            // console.log("City Not found");
            // toast.error(`Entered City-Name  ${city} Not Found `, {
            //   position: "top-center",
            //   autoClose: 2000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            // });
            // setcity("");
          } else {
            console.log(data);
            setcurrentweather(data.main.temp);
            setweathertext(data.weather[0].description);
            seticon(data.weather[0].icon);
            setcity1(data.sys.country);
            sethumidity(data.main.humidity);
            setwind(data.wind.speed)
            // setcity("");
          }

          // setcity("");
        });
    }
  });

  let inputhndl = (event) => {
    setcity(event.target.value);
  };

  useEffect(() => {
    lpsearch();
  }, [city, lpsearch]);
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{" "}
      <div className="container-fluid">
        {" "}
        <h2 className="text-center alert-success font-weight-bolder ">
          <Clock format={"dddd, DD  MMMM   , YYYY, h:mm:ss"} ticking={true} />
        </h2>
      </div>
      <div className="lpcentered  ">
        <h3 className="alert-info text-capitalize text-center">
          Enter City's <i className="fas fa-city text-secondary"></i> Name
        </h3>
        <input
          onChange={inputhndl}
          value={city}
          placeholder="Enter Here"
          className="form-control btn-outline-warning font-weight-bolder mb-3 mt-3"
        ></input>
        <button
          className="form-control btn-success font-weight-bold "
          onClick={lpsearch}
        >
          Search <i className="fas fa-search  "></i>
        </button>
        {city ? (
          <div className="text-center">
            <h3 className="alert-secondary text-capitalize">
              <i class="fas fa-map-marker-alt"></i> {city} - {city1}
            </h3>

            <h3 className="text-capitalize alert-info">
              {" "}
              <i class="fas fa-temperature-low"></i> -{currentweather}{" "}
              <span>&#8451;</span> ,<i class="fas fa-tint"></i> - 
              {humidity} % <i class="fas fa-wind"></i> - {wind} km/h{" "}
            </h3>
            <h3 className="alert-secondary">
              {weathertext}{" "}
              <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="icon"
                srcset=""
                style={{ backgroundColor: "grey" }}
              />
            </h3>
          </div>
        ) : (
          <h5 className="alert-warning text-capitalize text-center">
            No City-Name Entered
          </h5>
        )}
      </div>
    </div>
  );
}
