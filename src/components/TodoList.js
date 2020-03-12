import React from "react";
import Todo from "./Todo";
import "./Todo.scss";
export default function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.tasks.map(task => (
        <Todo key={task.id} {...task} toggleCompleted={props.toggleCompleted} />
      ))}
    </ul>
  );
}
