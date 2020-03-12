import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [] //JSON.parse(localStorage.getItem("tasks") || "[]")
    };
  }
  componentDidUpdate = () => {
    //localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  };
  addTask = task => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          task,
          id: task + Date.now(),
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

  rearrangeItem = (item, target) => {
    console.log(`dragged ${item} onto ${target}`);
    if (item === target) return;
    const draggedItem = this.state.tasks.find(
      x => String(x.id) === String(item)
    );
    console.log(draggedItem);
    const targetIndex =
      String(target) === "-1"
        ? this.state.tasks.length
        : this.state.tasks.findIndex(x => String(x.id) === String(target));
    console.log(targetIndex);
    let newArray = this.state.tasks.filter(x => String(x.id) !== String(item));
    if (targetIndex === 0) newArray.unshift(draggedItem);
    else if (targetIndex === this.state.tasks.length)
      newArray.push(draggedItem);
    this.setState({ tasks: newArray });
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
          rearrangeItem={this.rearrangeItem}
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
