import React from "react";

// import styles from "./Covid.module.css";
import Cards from "./Cards/Cards";
// import Charts from "./Charts/Charts";
// import CountryPicker from "./CountryPicker/CountryPicker";
import img1 from "./Images/a8d866c87e75ae65af8a3f167ee1e8f6.gif"
// import img2 from"./Images/word-covid-19-with-coronavirus-icon-2019-ncov-novel-coronavirus-concept-sign_149267-423.jpg"

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
        <h1 className="text-center alert-danger font-weight-bolder"> Covid-19 Tracker <img src={img1} alt="" srcset=""  style={{height:"70px",width:"15%"}}/></h1>
        
        {/* passing fetchedata as props */}
      <Cards data={fetcheddata} ></Cards>
      {/* <CountryPicker></CountryPicker> */}
      {/* <Charts></Charts> */}
    </div>
  );
}
