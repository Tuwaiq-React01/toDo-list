import React, { Component } from 'react'
import './App.css';
import Todo from './Todo'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      input: ""
    }

    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.checkTodo = this.checkTodo.bind(this)
    this.clearList = this.clearList.bind(this)
  }
  componentDidMount(){
    this.setState({
      list: [
        { id: 0, content: "Shopping", checked: false }, 
        { id: 1, content: "Gym", checked: false }, 
        { id: 2, content: "Read a Book", checked: false }
      ]
    })
  }
  addTodo() {
    this.state.list.push({ id: 0, content: this.state.input, checked: false })
    const list = this.state.list.map((item, i) => { item.id = i; return item; })
    
    this.setState({ list: list, input: "" })
  }
  removeTodo(id) {
    this.setState({ 
      list: this.state.list.filter(item => item.id !== id) 
    })
  }
  checkTodo(id) {
    this.setState({ 
      list: this.state.list.map(item => { if(item.id == id) item.checked = !item.checked; return item }) 
    })
  }
  clearList() {
    this.setState({ list: [] })
  }
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div className="wrapper">
          <input type="text" placeholder="Write your Todo" value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
          <button className="custom-btn btn-1" onClick={this.addTodo}>+</button>
          <button className="custom-btn btn-2" onClick={this.clearList}>Clear List</button>
        </div>
        <div className="list">
          {this.state.list.map(item => <Todo key={item.id} item={item} checkTodo={this.checkTodo} removeTodo={this.removeTodo} />)}
        </div>
      </div>
    )
  }
}