import React, { Component } from 'react'
import Form from './TodoForm'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">
        <h3 className="text-shadow text-white p-6 uppercase text-center text-3xl font-bold">To do list</h3>
        </div>
        <Form/>
      </div>
    )
  }
}
