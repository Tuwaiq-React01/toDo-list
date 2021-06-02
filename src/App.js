import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      input: "",
      list: []
    }
    this.addItem = this.addItem.bind(this)
    this.accInput = this.accInput.bind(this)
    this.clear = this.clear.bind(this)
  }
  addItem(){
    this.setState({
      list: [...this.state.list,this.state.input],
      input: ""
    })
    document.getElementById('input').value = ""
  }  
  clear(){
    this.setState({
      list: []
    })
    document.getElementById('input').value = ""
  }  
  accInput(){
    this.setState({
      input: document.getElementById('input').value
    })
  }
  
  render() {
    var items = this.state.list.map((value)=>{
        return(
          <li>{value}</li>
        )
    })

    return (
      <div>
        <h1>To-Do List</h1>
        <ul id="List">
          {items}
        </ul>
        <input id="input" onChange={this.accInput} type="text"></input>
        <button onClick={this.addItem}>Add Item</button>
        <button onClick={this.clear}>Clear List</button>
      </div>
    )
  }
}


