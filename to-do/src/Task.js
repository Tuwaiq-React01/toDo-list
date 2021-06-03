import React, { Component } from 'react';

export default class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activity: this.props.activity,
        }
    }

    render() {
        return (
            <tr className='table-secondary'>
                <td >
                    {this.state.activity}
                </td>
            </tr>
        )
    }
}