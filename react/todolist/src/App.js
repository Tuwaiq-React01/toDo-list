import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ToDoList from "./ToDoList";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      value: "",
    };

    this.changeList = this.changeList.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  componentDidMount() {
    this.initialList();
  }

  initialList() {
    this.setState({
      todoList: ["Vaccum the floor", "Iron clothes", "Submit Design Patterns project"],
    });
  }

  changeList(event) {
    this.setState({ value: event.target.value });
  }

  addTask = (event) => {
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
    this.setState({ todos: [] });
  };


  render() {
    return (
      
      <div>
        <Container>
        <Navbar expand="xxl" variant="dark" bg="dark">
        <Container>
        <Navbar.Brand href="#">My Tasks for Today:</Navbar.Brand>
        </Container>
        </Navbar>

        {this.state.todoList.map((todo) => (
          <ToDoList todo={todo} />
        ))}

        <input
          type="text"
          value={this.state.value}
          onChange={this.changeList}
        />

        <Button variant="outline-dark" type="button" onClick={this.addTask} className="AddButton">
          Add Task
        </Button>

        <Button variant="outline-danger" type="button" onClick={this.clearTodo} className="clear">
          Clear List
        </Button>
        </Container>

      </div>
    );
  }
}