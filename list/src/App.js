import React, { Component } from 'react'
import './App.css'
import List from './List.js'
export default class App extends Component {

  render() {
    return (
      <div>
        <h1>My List :</h1>

        <List> </List>

      </div>

    )
  }
}
