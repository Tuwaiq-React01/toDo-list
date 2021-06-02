import React, { Component } from 'react'

export default class ToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textValue : '',
            toDoList : []
        }

        this.updateValue = this.updateValue.bind(this)
        this.addTodoToList = this.addTodoToList.bind(this)
    }

    addTodoToList() {
        if(this.state.textValue !== '') {
            this.state.toDoList.push(this.state.textValue);
            this.setState(this.state.toDoList);
            
        }
    }

    updateValue(event) {
        this.setState({
            textValue : event.target.value
        });
    }
    
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({toDoList : []});
                }}>Clear List</button>
                <h1>This is my todo List</h1>

                <ul>
                    {this.state.toDoList.map(toDo => <li>{toDo}</li>)}
                </ul>

                <input onChange={this.updateValue} type="text"></input>
                <button onClick={this.addTodoToList}>Add to list</button>
            </div>
        )
    }
}
