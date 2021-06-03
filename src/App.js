import React, { Component } from "react";
import List from "./List";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      textArea: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addToList = this.addToList.bind(this);
  }
  handleChange(event) {
    this.setState({ textArea: event.target.textArea });
  }
  componentDidMount() {
    this.defaultTodo();
  }
  defaultTodo() {
    this.setState({
      todoList: ["Gaming", "Sleep", "Sleep"],
    });
  }

  addToList = (event) => {
    this.setState((state) => {
      const todoList = [...state.todoList, state.textArea];
      return {
        todoList,
        textArea: "",
      };
    });
    event.preventDefault();
  };
  clearList = (event) => {
    this.setState({ todoList: [],
     });
  };
  render() {
    return (
      <div className="App">
        <h1 className="title">To-Do</h1>
        {this.state.todoList.map((list,key) => (
          <List key={key} list={list} />
        ))}

        <input
          type="text"
          value={this.state.textArea}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <br />
        <button type="button" onClick={this.addToList} className="btn btn-dark">

          Add new Task
        </button>

        <button className="btn btn-dark" type="button" onClick={this.clearList} className="btn btn-dark">
          Clear
        </button>
      </div>
    );
  }
} 