import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div className="todo">
                <div onClick={() => this.props.checkTodo(this.props.item.id)} className={"pointer" + (this.props.item.checked ? " checkd" : "")}>{this.props.item.content}</div>
                <span className="cross pointer" onClick={() => this.props.removeTodo(this.props.item.id)}>x</span>
            </div>
        )
    }
}
