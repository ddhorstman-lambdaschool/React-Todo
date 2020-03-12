import React from "react";
import Todo from "./Todo";
import DragTarget from "./DragTarget";
import "./Todo.scss";
import { thistle } from "color-name";
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draggedItem: 0,
      dragTarget: 0
    };
  }

  startDrag = ({ target: { id } }) => {
    console.log(id);
    this.setState({ draggedItem: id });
  };
  dragOver = ({ target: { id } }) => {
    this.setState({ dragTarget: id });
  };
  stopDrag = e => {
    console.log(e.target);
    console.log("done dragging");
    if (this.state.dragTarget !== 0)
      this.props.rearrangeItem(this.state.draggedItem, this.state.dragTarget);
    this.setState({ draggedItem: 0 });
    this.setState({ dragTarget: 0 });
  };
  render = () => {
    return (
      <ul className="todo-list">
        {this.props.tasks.map(task => (
          <li
            id={task.id}
            draggable={!!this.props.tasks[1]}
            onDragStart={this.startDrag}
            onDragEnd={this.stopDrag}
            key={task.id}
          >
            {this.props.tasks[1] && (
              <DragTarget
                id={task.id}
                dragging={this.state.draggedItem}
                selected={this.state.dragTarget === this.id}
                dragOver={this.dragOver}
              />
            )}
            <Todo {...task} toggleCompleted={this.props.toggleCompleted} />
          </li>
        ))}
        {this.props.tasks[1] && (
          <li>
            <DragTarget
              id={-1}
              selected={this.state.dragTarget === -1}
              dragging={this.state.draggedItem}
              dragOver={this.dragOver}
            />
          </li>
        )}
      </ul>
    );
  };
}
