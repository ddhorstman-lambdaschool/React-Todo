import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }
  addTask = task => {
    const nextId = this.state.tasks[0]
      ? this.state.tasks[this.state.tasks.length - 1].id + 1
      : 1;
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          task,
          id: nextId,
          completed: false
        }
      ]
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
