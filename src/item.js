
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";

export default class Item extends Component {
    render() {
       const items = this.props.list.map((item) =>
        <li >
             {item}
        </li>)
    return (
        <div >    
            <ListGroup>
               <ListGroup.Item>{items}</ListGroup.Item>  
            </ListGroup>
        </div>
        )
    }
}

