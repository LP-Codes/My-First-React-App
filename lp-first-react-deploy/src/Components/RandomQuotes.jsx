import React, { useState } from "react";
import TodoItem from "./TodoItem";
import shortid from "shortid";


export default function Todo() {
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
    const newTodos = [...todos, { id: shortid.generate(), text: input }];

    setTodos(newTodos);
    // clearing input text
    setValue("");
  };
  const handeldel = (id) => {
    // console.log(index)

    const newList = todos.filter((t) => t.id !== id);
    console.log(newList);
    setTodos(newList);

    // const newTodos = todos.splice(index, 1);
    // setTodos([...newTodos]);
  };

  return (
    <div>
      <h1 className="text-center font-weight-bolder alert-info mb-5">
        Tasks To Do <i class="fas fa-clipboard-list text-success"></i>
      </h1>
      <div className="input-group mb-3 container">
        <input
          className="form-control border-primary font-weight-bold"
          style={{ height: 60 }}
          placeholder="Enter Text here"
          type="text"
          value={input}
          onChange={handleInput}
        />
        <div className="input-group-append">
          <button
            className="input-group-append font-weight-bolder "
            style={{ fontSize: 20 }}
            onClick={lp}
          >
            OK
            <i className="fas fa-plus-square fa-2x p-2"></i>{" "}
          </button>
        </div>
      </div>
      <ol style={{ listStyle: "outside" }} className="container">
        {todos.map((x, index) => (
          <TodoItem
            key={x.id}
            todo={x.text}
            handeldel={() => handeldel(x.id)}
          />
        ))}
      </ol>
    </div>
  );
}