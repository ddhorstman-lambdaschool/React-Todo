import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.task) return;
    this.props.addTask(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="task"
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add Task" />
      </form>
    );
  }
}
