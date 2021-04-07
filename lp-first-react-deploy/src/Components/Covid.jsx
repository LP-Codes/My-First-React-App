import React from "react";

// import styles from "./Covid.module.css";
import Cards from "./Cards/Cards";
// import Charts from "./Charts/Charts";
import CountryPicker from "./CountryPicker/CountryPicker";


import { useEffect,useState } from "react";

export default function Covid() {

  const [fetcheddata, setfetcheddata] = useState("")

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
          // console.log(data);
          setfetcheddata(data)

      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

   



  return (
    <div className="container-fluid">
        <h1 className="text-center alert-danger">Live Covid Tracker</h1>
        {/* passing fetchedata as props */}
      <Cards data={fetcheddata} ></Cards>
      <CountryPicker></CountryPicker>
      {/* <Charts></Charts> */}
    </div>
  );
}
