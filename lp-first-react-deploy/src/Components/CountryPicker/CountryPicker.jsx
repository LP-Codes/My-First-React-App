import React from "react";
import { useEffect, useState } from "react";

export default function CountryPicker() {
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
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedcountry]);

  return (
    <div>
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
