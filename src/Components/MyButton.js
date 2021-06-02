import React, { Component } from 'react'

export default class MyButton extends Component {
  
    render() {
        return (
           <button className="MyButton" onClick={this.props.onClickMe}>{this.props.text}</button> 
        )
    }
}
