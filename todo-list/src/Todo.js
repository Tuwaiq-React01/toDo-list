import React, { Component } from "react";
import "./style.css";

export default class Todo extends Component {
  render() {
    return <div className="todo">{this.props.todo}</div>;
  }
}
