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
    </div>
  );
}
