import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';


export default class List extends Component {
    render() {
        
    return(
    <div>
    <Table striped bordered hover variant="dark">
    <thead>
    </thead>
    <tbody>
    <tr>
    <td>{this.props.todo}</td>
    </tr>
    </tbody>
    </Table>
    </div>
    );
     
    }
}