import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import ToDoList from './ToDoList';

export default class App extends Component {
  render() {
    return (
      <div className=".overAll">
        <h2>Enter your TO DO LIST </h2>
        <ToDoList/>
      </div>
    )
  }
}
