import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import logo192 from "../Images/logo192.png";
import RandomQuotes from "./RandomQuotes";
import Issuetracker from "./Issuetracker";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand bg-dark navbar-dark mb-2">
        <a class="navbar-brand">
          <img src={logo192} alt="logo" style={{ width: "40px" }} />
        </a>

        <ul class="navbar-nav">
          <li
            class="nav-item   ml-3 "
            style={{ fontSize: "25px" }}
          >
            <Link to={"/"}><i class="fas fa-home fa-2x"></i></Link>
          </li>
          <li
            class="nav-item  ml-3 "
            style={{ fontSize: "25px" }}
          >
            <Link to={"/randomquotes"}><i class="fab fa-quora fa-2x"></i></Link>
          </li>
          <li
            class="nav-item   ml-3"
            style={{ fontSize: "25px" }}
          >
            <Link to={"/issuetracker"}><i class="fas fa-bug fa-2x"></i></Link>
          </li>
        </ul>
        <div class="navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <i class="fab fa-node fa-2x text-warning"></i>
            </li>
            <li class="nav-item">
              <i class="fab fa-linux fa-2x text-info"></i>
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
