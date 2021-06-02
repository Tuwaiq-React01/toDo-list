import React, { Component } from 'react'

export default class ListItem extends Component {
    constructor(props){
        super(props)
    
    }

    render() {
        var items = this.props.listData.map((value)=>{
            return(
                <li class="list-group-item ">{value}</li>
            )
        })
        return (
            <ul class="list-group-item">
                {items}
            </ul>
        )
    }
}
