import React from "react";
import { useState, useEffect } from "react";

import CountUp from "react-countup";

export default function Cards() {
  const [active, setactive] = useState("");
  const [recovered, setrecovered] = useState("");
  const [deaths, setdeaths] = useState("");
  const [updatetime, setupdatetime] = useState("");

  useEffect(() => {
    const urlc = "https://covid19.mathdro.id/api";
    fetch(urlc)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      })
      .then((data) => {
        //   console.log(data);
        setactive(data.confirmed.value);
        setrecovered(data.recovered.value);
        setdeaths(data.deaths.value);
        const chng = new Date(data.lastUpdate).toDateString();
        setupdatetime(chng);

        //   console.log(data.confirmed.value);
        //   console.log(data.recovered.value);
        //   console.log(data.deaths.value);
        //   console.log(data.lastUpdate);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
                decimals={3}
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
                decimals={3}
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
                decimals={3}
              ></CountUp>
            </p>
            <p className="text-center font-weight-bolder alert-dark">
              Last Updated - {updatetime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
