import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props){
        super(props);
        this.state={
            item:props.item
        }
    }
    render() {
        return (
            <div>
                <li>{this.props.item}</li>
            </div>
        )
    }
}
