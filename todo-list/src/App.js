import React, { Component } from "react";
import Todo from "./Todo";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    this.defaultTodo();
  }

  defaultTodo() {
    this.setState({
      todos: ["Gym", "Coffee", "Eat"],
    });
  }

  addTodo = (event) => {
    this.setState((state) => {
      const todos = [...state.todos, state.value];
      return {
        todos,
        value: "",
      };
    });

    event.preventDefault();
  };

  clearTodo = (event) => {
    this.setState({ todos: [] });
  };

  render() {
    return (
      <div>
        <h1>My Todo</h1>

        {this.state.todos.map((todo) => (
          <Todo todo={todo} />
        ))}

        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.addTodo} className="AddButton">
          Add todo
        </button>
        <button type="button" onClick={this.clearTodo} className="clear">
          Clear
        </button>
      </div>
    );
  }
}
