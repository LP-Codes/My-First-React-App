import React, { useState } from "react";
import "./Issuetracker.css";

const Issuetracker = () => {
  const [input, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  // passing  entered
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const lp = (event) => {
    // let c = [1,2,34,55]

    event.preventDefault();
    // if no input nothing will happen return none
    if (!input) return;
    // using spread operator its used whenever we need to add array data to exiting array
    const newTodos = [...todos, input];

    setTodos(newTodos);
    // clearing input text
    setValue("");
  };
  const handeldel=(index) => {
    // console.log(index)
  
    todos.splice(index, 1);
    setTodos([...todos]);  
   
    // const newTodos = todos.splice(index, 1);
    // setTodos([...newTodos]); 
//  how to delete
  
  }
// for future ref
  // const data = [
  //   { id: 1, name: "John Doe" },
  //   { id: 2, name: "Victor Wayne" },
  //   { id: 3, name: "Jane Doe" },
  // ];

  return (
      <div>
        <h1 className="text-center font-weight-bolder alert-info mb-5">Tasks To Do <i class="fas fa-clipboard-list text-success"></i></h1>
        <div class="input-group mb-3 container">
          <input
            className="form-control border-primary font-weight-bold"
            style={{ height: 60 }}
            placeholder="Enter Text here"
            type="text"
            value={input}
            onChange={handleInput}
          />
          <div class="input-group-append">
            <button
              className="input-group-append font-weight-bolder "
              style={{ fontSize: 20 }}
              onClick={lp}
            >
              {" "}
              <i class="fas fa-plus-square fa-2x p-2"></i>{" "}
            </button>
          </div>
       
        </div>
        {todos.map((x,index) => (
          <ol  style={{ listStyle:"outside" }} className="container">
            <li className="font-weight-bolder table-bordered text-capitalize alert-secondary " style={{fontSize:30}}>
              { x } <i class="fas fa-trash-alt  text-danger float-md-right" onClick={()=>handeldel(index)}></i>
            </li>
          </ol>
        ))}

        
        {/* for future ref */}
            {/* <div >
        {data.map((user) => (
          <div className="user">{user.id + "  " + user.name 
          }</div>
        ))}
      </div> */}
      </div>
  );
};

export default Issuetracker;
