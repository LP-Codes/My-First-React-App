import React from "react";

import { useState, useEffect } from "react";

export default function Charts() {
  const [dailydata, setdailydata] = useState({});

 useEffect(() => {
    const urlx = "https://covid19.mathdro.id/api/daily";

  fetch(urlx)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Something went wrong on api server!");
      }
    })
    .then((data) => {
    //   console.log(data);
      setdailydata(data);
    })
    .catch((error) => {
      console.error(error);
    });
 }, [])

  
  return (
    <div>
      <h1>Charts</h1>
    </div>
  );
}
