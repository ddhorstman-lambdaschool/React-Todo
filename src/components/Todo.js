import React from "react";
import "./Todo.scss";
export default function Todo(props) {
  return (
    <p
      className={props.completed ? "task completed" : "task"}
      id={props.id}
      onClick={props.toggleCompleted}
    >
      <input type="checkbox" checked={props.completed} />
      {props.task}
    </p>
  );
}
