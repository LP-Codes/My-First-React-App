import React, { useState, useEffect } from "react";

const Home = () => {
  const [lpdate, setlpdate] = useState("Date");
  const [cityname, setcityname] = useState("city");
  const [statename, setstatename] = useState("statename");
  const [currentweather, setcurrentweather] = useState("weather");
  const [randomquoteauthor, setrandomquoteauthor] = useState("");
  const [randomquote, setrandomquote] = useState("");

  // Only Run Once, on Mount
  // You can pass the special value of empty array [] as a way of saying “only run on mount, and clean up on unmount”. So if we changed our component above to call useEffect like this:
  // using useefect for onload event  return will trigger on exiting
  useEffect(() => {
    // console.log("onload useefect fired")
    setlpdate(Date());
    let url1 = "http://ip-api.com/json/";

    let url5 = "https://type.fit/api/quotes";
    fetch(url1)
      .then((res) => res.json())
      .then((data) => {
        setcityname(data.city);
        setstatename(data.regionName);
        const fetchedcity = data.city;
        const apikey = "0926e3715bd414c4bdd946435fb4553d";
        const url4 = `https://api.openweathermap.org/data/2.5/weather?q=${fetchedcity}&appid=${apikey}&units=metric`;
        fetch(url4)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.main.temp);
            setcurrentweather(data.main.temp);
          });
      });
    fetch(url5)
      .then((res) => res.json())
      .then(function (data) {
        // get random data between 0-100
        var x = Math.floor(Math.random() * 100 + 1);
        // console.log(data[x].author);
        setrandomquoteauthor(data[x].author);
        setrandomquote(data[x].text);
        // console.log(data[0]);
      });

    return () => {
      console.log("unmounting...");
    };
  }, []);

  return (
    <div>
      <div className="row card card-deck">
        <div className="card bg-primary col">
          <div
            className="card-body text-center font-weight-bolder text-white p-5 "
            id="ip"
            style={{ minHeight: 200 }}
          >
            {/* <!-- date will be displayed  using state--> */}
            <h4>
              {" "}
              <i class="fa fa-clock-o fa-2x" aria-hidden="true"></i>
            </h4>
            <h5>
              {" "}
              {lpdate} <i class="fas fa-cog fa-spin"></i>
            </h5>
          </div>
        </div>

        <div className="card bg-warning col">
          <div className="card-body text-center p-5 text-secondary" id="ip">
            {/* <!-- location will be displayed using state--> */}
            <h4>
              {" "}
              <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>{" "}
            </h4>
            <h5>Your Location Is Detected As :</h5>
            <h3>
              {cityname} , {statename}
            </h3>
          </div>
        </div>

        <div className="card bg-success col">
          <div
            className="card-body text-center p-5"
            id="ip"
            style={{ color: "yellow" }}
          >
            {/* <!-- date will be displayed --> */}
            <h4>
              <i class="fas fa-cloud-sun fa-2x"></i>
            </h4>
            <h4>
              Current Weather at your location is : {currentweather}{" "}
              <b>
                <span>&#8451;</span>
              </b>
            </h4>
          </div>
        </div>

        <div className="card bg-danger col">
          <div className="card-body text-center p-5" id="ip">
            {/* <!-- date will be displayed --> */}
            <h2>
              {" "}
              <i
                className="fa fa-users fa-2x text-white"
                aria-hidden="true"
              ></i>
            </h2>
            <h3 className="font-weight-bolder ">
              {" "}
              Author - {randomquoteauthor}
            </h3>
            <h4 className="font-weight-bolder text-white">{randomquote}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
