import React, { Component } from "react";
import ToDoList from "./ToDoList";
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
      todoList: [".NET Assignment", "React Course", "React Project", "Design Pattern Project", "My Paper Presentation"],
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
        <h1 className="title">Todo List</h1>
        {this.state.todoList.map((todo) => (
          <ToDoList todo={todo} />
        ))}

        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <button type="button" onClick={this.addTodo} className="AddButton">

          Add Task
        </button>

        <button className="" type="button" onClick={this.clearTodo} className="clear">
          Reset
        </button>
      </div>
    );
  }
}