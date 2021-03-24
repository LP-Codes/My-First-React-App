import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import logo192 from "../Images/logo192.png";
import RandomQuotes from "./RandomQuotes";
import Issuetracker from "./Issuetracker";
import Home from "./Home";

const App = () => {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark mb-2">
        <a class="navbar-brand">
          <img src={logo192} alt="logo" style={{ width: "40px" }} />
        </a>

        <ul class="navbar-nav">
          <li
            class="nav-item  font-weight-bolder ml-3  "
            style={{ fontSize: "25px" }}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            class="nav-item mr-2 font-weight-bolder ml-5 "
            style={{ fontSize: "25px" }}
          >
            <Link to={"/randomquotes"}>Random Quotes</Link>
          </li>
          <li
            class="nav-item mr-2 font-weight-bolder ml-5"
            style={{ fontSize: "25px" }}
          >
            <Link to={"/issuetracker"}>Issue Tracker</Link>
          </li>
        </ul>
        <div class="navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <i class="fab fa-node fa-3x text-warning"></i>
            </li>
            <li class="nav-item">
              <i class="fab fa-linux fa-3x text-danger"></i>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/issuetracker" component={Issuetracker} />
        <Route exact path="/randomquotes" component={RandomQuotes} />
      </Switch>
    </div>
  );
};

export default App;
