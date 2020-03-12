import React from "react";
import "./Todo.scss";
export default class DragTarget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    };
  }
  onDragEnter = e => {
    e.preventDefault();
    this.setState({ selected: true });
  };
  onDragLeave = e => {
    e.preventDefault();
    this.setState({ selected: false });
  };
  render = () => {
    return (
      <div
        id={this.props.id}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        onDragOver={this.props.dragOver}
        className={this.state.selected ? "drag-target selected" : "drag-target"}
      >
        {this.props.dragging
          ? ".................................................................................."
          : ""}
      </div>
    );
  };
}
