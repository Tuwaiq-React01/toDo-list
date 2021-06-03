import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <ul>
                {this.props.list.map(item=><li>{item}</li>)}
                </ul>
            </div>
        )
    }
}
