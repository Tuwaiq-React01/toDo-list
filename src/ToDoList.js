import React, { Component } from 'react'

export default class ToDoList extends Component {
    render() {

        return <div><ul>


        </ul>
            <li>
                {this.props.todo}
            </li>
        </div>;

    }
}
