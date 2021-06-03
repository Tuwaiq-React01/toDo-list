import React, { Component } from 'react'
export default class ToDo extends Component {
  render() {
    return (
      <div>
         <h1> My list </h1>
          <div>{this.props.todo}</div>;
          <toDo/>
      </div>
    )
  }
}