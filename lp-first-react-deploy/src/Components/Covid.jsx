import React from "react";

// import styles from "./Covid.module.css";
import Cards from "./Cards/Cards";
import Charts from "./Charts/Charts";
import CountryPicker from "./CountryPicker/CountryPicker";


// import { useEffect,useState } from "react";

export default function Covid() {

   



  return (
    <div className="container-fluid">
        <h1 className="text-center alert-danger">Live Covid Tracker</h1>
        {/* passing fetchedata as props */}
      <Cards ></Cards>
      <CountryPicker></CountryPicker>
      {/* <Charts></Charts> */}
    </div>
  );
}
