import React from "react";

import "./Issuetracker.css";

const Issuetracker = () => {
  return (
    <div>
      <h2 className="text-center  alert-info font-weight-bolder">To Do List</h2>
      <div class="input-group mb-3">
        <input
          type="text"
          className="form-control font-weight-bold border border-info"
          style={{ height: 60 }}
          placeholder="Enter Text Here"
        />
        <div class="input-group-append">
          <button
            className="  font-weight-bolder"
            style={{ fontSize: 20 }}
          >
            {" "}
            ADD <i class="far fa-plus-square  "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Issuetracker;
