import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from 'react-router-dom'
import "font-awesome/css/font-awesome.min.css";
// import { BrowserRouter } from "react-router-dom";
import App from "./Components/App";

ReactDOM.render(
  // browseroute /hashrote is imp 
// replace BrowserRouter with hashrouter to fix refresh crash of route page on gitpages 
   <HashRouter  basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

reportWebVitals();
