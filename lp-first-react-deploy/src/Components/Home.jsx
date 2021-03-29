import React, { useState, useEffect } from "react";
import "./App.css";
import Youtube from "./Youtube";

const Home = () => {
  const [lpdate, setlpdate] = useState("");
  const [cityname, setcityname] = useState("");
  const [statename, setstatename] = useState("");
  const [currentweather, setcurrentweather] = useState("");
  const [randomquoteauthor, setrandomquoteauthor] = useState("");
  const [randomquote, setrandomquote] = useState("");
  const [fact, setfact] = useState([])

  // Only Run Once, on Mount
  // You can pass the special value of empty array [] as a way of saying “only run on mount, and clean up on unmount”. So if we changed our component above to call useEffect like this:
  // using useefect for onload event  return will trigger on exiting
  useEffect(() => {
    let d = new Date()
 
   let facturl =`https://en.wikipedia.org/api/rest_v1/feed/onthisday/births/${d.getMonth()+1}/${d.getDate()}`
   fetch(facturl)
  .then(res => res.json())
  .then(data => {
    let fact = data.births.slice(0, 5).map((x,index)=> {
   
    
      return      index+1+" . " + x.text + " - Year "+ x.year +" \n " ;
    });

    setfact(fact)
  

       
   });
   

    // console.log("onload useefect fired")
    setlpdate(Date());
    // const ipkey = "693a05e3434d4a869ba63d38f2a06a5e";
    // let url1 = `https://api.ipgeolocation.io/ipgeo?apiKey=${ipkey}&ip=2401:4900:1aaf:2a7e:298d:9379:fe93:5123`;
    let myip="https://get.geojs.io/v1/ip/geo.json"
    // let urlm="https://api.ipgeolocationapi.com/geolocate"

    let url5 = "https://type.fit/api/quotes";
    fetch(myip)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setcityname(data.city);
        setstatename(data.region);
        const fetchedcity = data.city;
        const apikey = "0926e3715bd414c4bdd946435fb4553d";
        const url4 = `https://api.openweathermap.org/data/2.5/weather?q=${fetchedcity}&appid=${apikey}&units=metric`;
        fetch(url4)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data.main.temp);
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
            className=" lp card-body text-center font-weight-bolder text-white p-5 "
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
            <h5 className="text-warning font-weight-bolder">Born On this Day <i class="fas fa-birthday-cake fa-2x" style={{color:"pink"}}></i></h5>
            <p>{fact}</p>
          </div>
        </div>

        <div className=" lp card bg-warning col">
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

        <div className=" lp card bg-success col">
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

        <div className=" lp card bg-danger col text-white-50">
          <div className="card-body text-center p-5" id="ip">
            {/* <!-- date will be displayed --> */}
            <h2>
              {" "}
              <i
                className="fa fa-users fa-2x "
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
      <Youtube></Youtube>
    </div>
  );
};

export default Home;
