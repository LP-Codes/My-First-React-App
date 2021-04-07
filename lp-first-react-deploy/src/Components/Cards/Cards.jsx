import React from "react";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "70%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Cards(props) {
  const classes = useStyles();
  // const [age, setAge] = React.useState("");


  const [active, setactive] = useState("");
  const [recovered, setrecovered] = useState("");
  const [deaths, setdeaths] = useState("");
  const [updatetime, setupdatetime] = useState("");
  const [contry, setcontry] = useState([]);
  const [selectedcountry, setselectedcountry] = useState("");

  // ! selected country
  const checkselval = (e) => {
    const countryname = e.target.value;
    // console.log(countryname);
    setselectedcountry(countryname);
  };

  // ! setting default val
  useEffect(() => {
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
  // ! for selecter country
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
        // console.log(data.countries);
        const lp = data.countries;
        //   console.log(lp);
        setcontry(lp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setcontry]);
  // ! fetching selected country data
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
        <div className="card11 col lp22">
          <div className="card-body  ">
            <h4 className="card-title text-center text-capitalize alert-info ">
              Total Infected <i class="fas fa-head-side-virus fa-2x"></i>
            </h4>
            <p class="card-text text-center text-white font-weight-bolder">
              <CountUp
                start={0}
                end={active}
                duration={1.5}
                separator=","
              ></CountUp>
            </p>

            <p className="text-center font-weight-bolder alert-info text-secondary">
              Last Updated - {updatetime}
            </p>
          </div>
        </div>
        <div className="card11 col ml-2 lp22">
          <div className="card-body">
            <h4 className="card-title text-center text-capitalize alert-success">
              Total Recovery <i class="fas fa-heartbeat fa-2x"></i>
            </h4>
            <p class="card-text text-center text-white font-weight-bolder">
              {" "}
              <CountUp
                start={0}
                end={recovered}
                duration={1.5}
                separator=","
              ></CountUp>
            </p>
            <p className="text-center font-weight-bolder alert-dark text-secondary">
              Last Updated - {updatetime}
            </p>
          </div>
        </div>
        <div className="card11 col ml-2 lp22">
          <div className="card-body">
            <h4 className="card-title text-center text-capitalize alert-danger">
              Total Deaths <i class="far fa-dizzy fa-2x"></i>
            </h4>
            <p class="card-text text-center text-white font-weight-bolder">
              {" "}
              <CountUp
                start={0}
                end={deaths}
                duration={1.5}
                separator=","
              ></CountUp>
            </p>
            <p className="text-center font-weight-bolder alert-dark text-secondary">
              Last Updated - {updatetime}
            </p>
          </div>
        </div>
      </div>
      <div className="form-group font-weight-bolder mt-4 text-center alert-info ">
        <h5 className="font-weight-bolder text-danger">{selectedcountry} </h5>
        <h5 className="font-weight-bolder mt-4">Select Country </h5>
        {/* <h5 className="">Select Country </h5> */}

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label" className="font-weight-bold">Select Country</InputLabel>
          <Select
            class="form-control font-weight-bold  mt-3 alert-dark"
            id="sel1"
            onClick={checkselval}
            value={selectedcountry}
          >
            {contry.map((x, i) => {
              return (
                <MenuItem
                  className="alert-dark font-weight-bold  "
                  value={x.name}
                  index={i}
                >
                  <img
                    src={`https://www.countryflags.io/${x.iso2}/shiny/64.png`}
                    alt="Flag"
                    style={{ backgroundColor: "lightblue" ,height:"90px"}}
                  /> 
                   {x.name} 
                  
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
