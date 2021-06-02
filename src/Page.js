import React, { Component } from 'react'
import TodoList from './TodoList.js'
export default class Page extends Component {
   
    constructor(){
        super()
        this.state = {
            todoItem:"No items to show",
            itemsArray: []
        }
        //important: need to bind!!!!!
        this.addToList = this.addToList.bind(this)
        this.clearList = this.clearList.bind(this)
    }

    addToList(event){
        this.setState({
            itemsArray: [...this.state.itemsArray, this.state.todoItem]
        })
    }
    clearList(event){
        this.setState({
            itemsArray: []
        })
    }
    render() {
        return (
            <div style>
                <h1>My ToDo List:</h1>
                <button onClick={this.clearList}>Clear list</button>
                <ul>
                    <TodoList />
                </ul>

                <input type="text"/>
                <button onClick={this.addToList}>Add item</button>
            </div>
        )
    }
}
