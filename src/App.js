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
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          task,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  toggleCompleted = ({ currentTarget: { id } }) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        return String(task.id) === String(id)
          ? {
              ...task,
              completed: !task.completed
            }
          : task;
      })
    });
  };
  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
