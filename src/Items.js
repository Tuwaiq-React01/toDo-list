import React, { Component } from 'react'

export default class Items extends Component {
    render() {const items = this.props.listArray.map((item, index) =>

        <li style={{ backgroundColor:'#ffffff' }} key={index} >
            You want to {item}
        </li>)
    return (
        <div >    
            <ul>
              <h3> {items} </h3>  
            </ul>
        </div>
        )
    }
}
