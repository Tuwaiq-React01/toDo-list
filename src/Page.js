import React, { Component } from 'react'
import TodoList from './TodoList.js'
export default class Page extends Component {
   
    constructor(){
        super()
        this.state = {
            todoItem:"",
            itemsArray: []
        }
        //important: need to bind!!!!!
        this.addToList = this.addToList.bind(this)
        this.clearList = this.clearList.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    componentDidMount (){
        this.setState({
            itemsArray: localStorage.getItem("Todolist").split(',')
        })
        
    }
    addToList(event){
        this.setState({
            itemsArray: [...this.state.itemsArray, this.state.todoItem]
        })
        localStorage.setItem("Todolist", [...this.state.itemsArray, this.state.todoItem])
    }
    clearList(event){
        this.setState({
            itemsArray: []
        })
        localStorage.setItem("Todolist", [])

    }

    handleChange(event) {
        this.setState({todoItem: event.target.value});
      }

      
    render() {
        return (
            <div >
                <h1>My ToDo List:</h1>
                <button onClick={this.clearList}>Clear list</button>
                <ul>
                    <TodoList list={this.state.itemsArray} />
                </ul>

                <input type="text" value={this.state.todoItem} onChange={this.handleChange} />
                <button onClick={this.addToList}>Add item</button>
            </div>
        )
    }
}
