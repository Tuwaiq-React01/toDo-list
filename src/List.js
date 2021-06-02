import React, { Component } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div>
                <li>
                    {this.props}
                </li>
            </div>
        )
    }
}
