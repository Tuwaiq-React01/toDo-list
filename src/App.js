import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import ListItem from './ListItem';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

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
  componentDidMount(){
    this.setState({
      list: ["Sample Item"]
    })
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
    return (
      <div class="container">
        <h1>To-Do List</h1>
          <ListItem  listData={this.state.list} />
          {/* {items} */}
        <input id="input" onChange={this.accInput} type="text"></input>
        <button class="mx-2 btn btn-dark" onClick={this.addItem}>Add Item</button>
        <button class="mx-2 btn btn-dark" onClick={this.clear}>Clear List</button>
      </div>
    )
  }
}


