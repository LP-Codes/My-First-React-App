import React, { useState } from "react";

export default function TodoItem(props) {
  const [line, setline] = useState(false);
  const [ll, setll] = useState(false);
  const markdone = () => {
    setline((prevState) => !prevState);

    setll((prevState) => !prevState);
  };
  return (
    <li
      className="font-weight-bolder table-bordered text-capitalize alert-secondary "
      style={{
        fontSize: 30,
        textDecoration: line ? "line-through" : "none",
        backgroundColor: ll ? "Chartreuse" : "transparent"
      }}
    >
      {props.todo}
      <button onClick={markdone}>{!ll ? "done" : "undone"}</button>{" "}
      <button onClick={props.handeldel}>delete</button>
    </li>
  );
}