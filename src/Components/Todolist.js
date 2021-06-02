import React, { Component } from 'react'

export default class Todolist extends Component {

    

        render() {
        return (
            <ul>
          { this.props.listOftodos.map((e,i)=><li key={i}>{e} <button className="delete" key={i} onClick={()=>{this.props.handleDelete(i)}}>x</button> </li>)}
            </ul>
        )
    }
}
