import React from "react";
import { useState, useEffect } from "react";

import CountUp from "react-countup";

export default function Cards(props) {
  const [active, setactive] = useState("");
  const [recovered, setrecovered] = useState("");
  const [deaths, setdeaths] = useState("");
  const [updatetime, setupdatetime] = useState("");

  // console.log(props.data);

  useEffect(() => {
    //  console.log(props);
    //  if (!props.data) {
    //    const msg = "Loading.."
    //    return msg
    //  }
    if (!props.data) {
      // console.log(props);
      const msg = "Loading..";
      return msg;
    } else {
      setactive(props.data.confirmed.value);
      setrecovered(props.data.recovered.value);
      setdeaths(props.data.deaths.value);
      const chng = new Date(props.data.lastUpdate).toDateString();
      setupdatetime(chng);
    }
  }, [props]);

  const [contry, setcontry] = useState([]);
  const [selectedcountry, setselectedcountry] = useState("");

  const checkselval = (e) => {
    const countryname = e.target.value;
    console.log(countryname);
    setselectedcountry(countryname);
  };

  useEffect(() => {
    const urlp = "https://covid19.mathdro.id/api/countries";
    fetch(urlp)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      })
      .then((data) => {
        // console.log(data.countries)
        const lp = data.countries;
        //   console.log(lp);
        setcontry(lp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setcontry]);

  useEffect(() => {
    const urlp2 = `https://covid19.mathdro.id/api/countries/${selectedcountry}`;
    fetch(urlp2)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      })
      .then((data) => {
        // console.log(data);
        setactive(data.confirmed.value);
        setrecovered(data.recovered.value);
        setdeaths(data.deaths.value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedcountry]);

  return (
    <div>
      <div className="row m-2">
        <div className="card11 col">
          <div className="card-body ">
            <h4 className="card-title text-center text-capitalize alert-info ">
              Total Infected
            </h4>
            <p class="card-text text-center text-secondary font-weight-bolder ">
              <CountUp
                start={0}
                end={active}
                duration={2.75}
                separator=","
              ></CountUp>
            </p>

            <p className="text-center font-weight-bolder alert-dark">
              Last Updated - {updatetime}
            </p>
          </div>
        </div>
        <div className="card11 col ml-2">
          <div className="card-body">
            <h4 className="card-title text-center text-capitalize alert-success">
              Total Recovered
            </h4>
            <p class="card-text text-center text-secondary font-weight-bolder">
              {" "}
              <CountUp
                start={0}
                end={recovered}
                duration={2.75}
                separator=","
              ></CountUp>
            </p>
            <p className="text-center font-weight-bolder alert-dark">
              Last Updated - {updatetime}
            </p>
          </div>
        </div>
        <div className="card11 col ml-2">
          <div className="card-body">
            <h4 className="card-title text-center text-capitalize alert-danger">
              Total Deaths
            </h4>
            <p class="card-text text-center text-secondary font-weight-bolder">
              {" "}
              <CountUp
                start={0}
                end={deaths}
                duration={2.75}
                separator=","
              ></CountUp>
            </p>
            <p className="text-center font-weight-bolder alert-dark">
              Last Updated - {updatetime}
            </p>
          </div>
        </div>
      </div>
      <div className="form-group font-weight-bolder mt-4 text-center alert-info ">
        <label for="sel1 ">Select Country:</label>
        <select
          class="form-control font-weight-bold  mt-3"
          id="sel1"
          onClick={checkselval}
        >
          <option>Global</option>

          {contry.map((x) => {
            // console.log(x);
            return (
              <option className="alert-dark font-weight-bold " value={x.name}>
                {x.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
