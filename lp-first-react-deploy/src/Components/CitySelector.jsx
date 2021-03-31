import React, { useState } from "react";
import { API_KEY, API_BASE_URL } from "./Api.js";

export default function CitySelector() {
  const [city, setcity] = useState("");
  const [results, setResults] = useState(null);
  const onSearch = () => {
    fetch(
      `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then(result => {
          console.log(result);
        setResults(results);
    });
  };
  return (
    <div>
      <div className="row">
        <div className="container text-center">
          <input
            className="form-control   font-weight-bolder btn-outline-info mb-4 mt-4"
            placeholder="Enter city"
            // update city value with the user's input
            onChange={(event) => setcity(event.target.value)}
            // value will be the currently selected city
            value={city}
          ></input>
          <button onClick={onSearch}>Check Weather</button>
        </div>
      </div>
    </div>
  );
}
