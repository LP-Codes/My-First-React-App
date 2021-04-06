
import React from "react";
import {useEffect,useState} from "react"

export default function CountryPicker() {
    const [contry, setcontry] = useState([])
useEffect(() => {
    const urlp = "https://covid19.mathdro.id/api/countries";
    fetch(urlp)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(data => {
    // console.log(data.countries)
  const lp =data.countries
//   console.log(lp);
  setcontry(lp)

   
    
  
  }).catch(error => {
    console.error(error);
  });
}, [])

  return (
    <div>
      
      <div className="form-group font-weight-bolder mt-4 text-center alert-info ">
  <label for="sel1 " >Select Country:</label>
  <select class="form-control font-weight-bold  mt-3" id="sel1">
    <option>Global</option>
   

    {contry.map((x) => {
      console.log(x);
     return <option className="alert-dark font-weight-bold " value={x.name}>{x.name }</option>
     
     
  
  })} 

   
   
  </select>
</div>
    </div>
  );
}
