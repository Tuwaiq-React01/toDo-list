import React, { Component } from 'react'
import './Todo.css';

export default class ToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [{ text: "Task 1" }, { text: "Task2" }],
            completed: false
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(event) {
        let newItem = { text: document.getElementById("element").value }
        this.setState({ tasks: this.state.tasks.concat(newItem) })

        //resetting all inputs fileds after submit
        let inputs = document.querySelectorAll("input");
        inputs.forEach((input) => (input.value = ""));
    }

    deleteItem(event) {
        let newItem = { text: document.getElementById("element").value }
        this.setState({ tasks: this.state.tasks.splice(newItem, 0) })
    }

    render() {
        const items = this.state.tasks.map((value, index) =>
            <li className="todo-list" key={index}>
                <div className="list-item-view">
                    <div className="item">
                        <input type="checkbox" name="" id="check" defaultChecked={this.state.completed} />
                        <label htmlFor="check">  {value.text}</label>
                    </div>
                </div>
            </li>
        )
        return (
            <div>
                <div id="app-container" className="app-container" style={{ margin: '50px auto' }}>
                    <div className="app-header">
                        <div className="today">
                            <h1>To Do List</h1>
                            <p>Hi! this is a daily list to organize your day ^^</p>
                        </div>
                    </div>
                    <div className="app-body">
                        <ul >
                            {items}
                        </ul>
                    </div>
                    <div className="app-form">
                        <input className="input-text" id="element" type="text" value={this.state.tasks.text} placeholder="Add your task" />
                        <button className="btn btn-success" onClick={(event) => this.addItem(event)}>Add </button>
                    </div>
                    <button className="btn btn-danger" onClick={(event) => this.deleteItem(event)}>Remove All List</button>

                </div>
            </div>
        )
    }
}
