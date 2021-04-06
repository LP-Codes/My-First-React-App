/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Issuetracker from "./Issuetracker";
import Home from "./Home";
import "./App.css";
import Weather from "./Weather";
import Covid from "./Covid";
import logo192 from "../Images/logo192.png";
// import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';

const App = () => {
  return (
    <div>
      {/* // eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <nav className="navbar  navbar-expand bg-dark navbar-dark mb-2">
        {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}

        <ul className="navbar-nav">
          <li className="nav-item    ">
            <Link to={"/"}>
              <i className="fas fa-home fa-2x text-warning"></i>
            </Link>
          </li>
          <li className="nav-item  ml-3 ">
            <Link to={"/weather"}>
              <i class="fas fa-cloud-sun fa-2x text-warning"></i>
            </Link>
          </li>
          <li className="nav-item   ml-3">
            <Link to={"/todo"}>
              <i className="far fa-list-alt fa-2x text-warning"></i>
            </Link>
          </li>
          {/* test */}
          <li className="nav-item dropdown ml-3">
            <a
              className=" nav-item  dropdown-toggle"
              href=""
              id="navbardrop"
              data-toggle="dropdown"
            >
              <i className="fas fa-caret-square-down fa-2x text-info"></i>
            </a>
            <div className="dropdown-menu ">
              <Link
                className="dropdown-item font-weight-bolder "
                to={"/covidtracker"}
              >
                {" "}
                Covid Tracker
              </Link>
            </div>
          </li>
        </ul>
        <div className="navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item navbar-brand">
              {/* <i class="fab fa-react fa-2x  text-info"></i> */}

              <img
                className="nav-item  "
                src={logo192}
                alt=""
                style={{ width: 35 }}
              />
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={Issuetracker} />
        <Route exact path="/weather" component={Weather} />
        <Route exact path="/covidtracker" component={Covid} />
      </Switch>
    </div>
  );
};

export default App;
