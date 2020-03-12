import React from "react";
import Todo from "./Todo";
export default function TodoList(props) {
  return (
    <ul>
      {props.tasks.map(task => (
        <Todo key={task.id} {...task} />
      ))}
    </ul>
  );
}
