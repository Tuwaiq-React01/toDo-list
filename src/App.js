import React, { Component } from 'react'
// import ModdTraker from "./ModdTraker"
import List from "./list"
import './App.css';
export default class App extends Component {
  render() {
    
    return (
      <div>
          <h2 className="my-list">My list</h2>
        <List/>
      </div>
    )
  }
}