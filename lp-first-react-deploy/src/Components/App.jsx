/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import logo192 from "../Images/logo192.png";

import Issuetracker from "./Issuetracker";
import Home from "./Home";
import "./App.css";
import Weather from "./Weather";
// import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';

const App = () => {
  return (
    <div>
      {/* // eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <nav className="navbar  navbar-expand bg-dark navbar-dark mb-2">
        {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navbar-brand">
          <img src={logo192} alt="logo" style={{ width: "40px" }} />
        </a>

        <ul className="navbar-nav">
          <li className="nav-item   ml-3 " style={{ color: "red" }}>
            <Link to={"/"}>
              <i className="fas fa-home fa-2x"></i>
            </Link>
          </li>
          <li className="nav-item  ml-3 ">
            <Link to={"/weather"}>
              <i className="fab fa-quora fa-2x "></i>
            </Link>
          </li>
          <li className="nav-item   ml-3">
            <Link to={"/issuetracker"}>
              <i className="far fa-list-alt fa-2x"></i>
            </Link>
          </li>
        </ul>
        <div className="navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <i className="fab fa-node fa-2x text-warning"></i>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/issuetracker" component={Issuetracker} />
        <Route
          exact
          path="/weather"
          render={() => (
            <Weather
              dt={1602104400 * 1000}
              temp_min="22.67"
              temp_max="24.39"
              main="Clear"
              icon="01d"
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
