import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <h3 >
                <span 
                style={{backgroundColor:"white", margin:"5px", padding:"3px"}}>
                ⭐ {this.props.item} <span style={{cursor: "pointer"}} onClick={()=>{
                    this.props.remove(this.props.index)
                }}> ❎</span></span>
                </h3>
            </div>
        );
    }
}

export default Item;
