import React from "react";
export default function Todo(props) {
  return (
    <li className={`task${props.completed && " completed"}`}>{props.task}</li>
  );
}
