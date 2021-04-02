import React, { useState } from "react";
import "./Issuetracker.css";
import { ToastContainer, toast ,Zoom,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import $ from 'jquery';
// window.jQuery = $;

const Issuetracker = () => {
  const [input, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  // passing  entered
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const lp = (event) => {
    if (input === "") {
      toast.error(' Please Provide Some Input!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    //  let c = [1,2,34,55]

    event.preventDefault();
    // if no input nothing will happen return none
    if (!input) return;
    // using spread operator its used whenever we need to add array data to exiting array
    const newTodos = [...todos, input];

    setTodos(newTodos);
    // clearing input text
    setValue("");
  };
  const handeldel = (index) => {
    // console.log(index)

    todos.splice(index, 1);
    setTodos([...todos]);

    // const newTodos = todos.splice(index, 1);
    // setTodos([...newTodos]);
  };
  // const [line, setline] = useState(false);
  // const [ll, setll] = useState(false);
  const markdone = (e) => {
    // let c= $("#ll")
    let tgt = e.target;

    // console.log(tgt);
    tgt.closest("li").style.backgroundColor = "Chartreuse";
    tgt.closest("li").style.textDecoration = "line-through";
  };
  // useEffect(() => {
  // //   $("#pk").click(function (e) {
  // //     e.preventDefault();
  // //     alert('hello');
  // // })
  // // }
  // // )

  return (
    <div>
      <ToastContainer
       transition={Zoom}
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 id="pk" className="text-center font-weight-bolder alert-info mb-5">
        Tasks To Do <i class="fas fa-clipboard-list text-success"></i>
      </h1>
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
      {todos.map((x, index) => (
        <ol style={{ listStyle: "outside" }} className="container">
          <li
            className="font-weight-bolder table-bordered text-capitalize alert-secondary "
            style={{
              fontSize: 30,
              // textDecoration: line ? "line-through" : "none",
              // backgroundColor: ll ? "Chartreuse" : "none",
            }}
          >
            {x}
            <i
              class="fas fa-check-circle float-md-right text-success"
              id="ll"
              onClick={markdone}
            ></i>{" "}
            <i
              class="fas fa-trash-alt  text-danger float-md-right"
              onClick={() => handeldel(index)}
            ></i>
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
