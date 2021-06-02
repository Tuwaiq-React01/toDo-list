import React, { Component } from "react";
import Todo from "./Todo";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
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
      todoList: ["Shower", "Clean", "have fun"],
    });
  }

  addTodo = (event) => {
    this.setState((state) => {
      const todoList = [...state.todoList, state.value];
      return {
        todoList,
        value: "",
      };
    });
    event.preventDefault();
  };
  clearTodo = (event) => {
    this.setState({ todoList: [] });
  };
  render() {
    return (
      <div className="App">
        <h1 className="title">To-Do</h1>
        {this.state.todoList.map((todo) => (
          <Todo todo={todo} />
        ))}

        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <br />
        <button type="button" onClick={this.addTodo} className="btn btn-dark">

          Add new Task
        </button>

        <button className="btn btn-dark" type="button" onClick={this.clearTodo} className="btn btn-dark">
          Clear
        </button>
      </div>
    );
  }
}