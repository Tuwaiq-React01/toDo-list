import React, { Component } from 'react'
import Todo from './Todo'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Card, Container, FormControl } from 'react-bootstrap';

export default class App extends Component {
  state = {
    items: ["Task 1", "Task 2", "Task 3"],
    value: ""
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  handleClick = (e) => {
    e.preventDefault()
    let items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items: items
    })
  }
  handleDelete = (e) => {
    this.setState({
      items: []
    })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className="App" width="400px">
        <Card>
          <Table>
            <tr>
              <h1>List Items</h1>
            </tr>
            <tr>
              <Todo items={this.state.items} />
            </tr>
            <tr>
              <td>
                <FormControl type="text" value={this.state.value} onChange={this.handleChange} aria-label="First name" />
              </td>
              <td><Button onClick={this.handleClick}>Add</Button></td>
              <td><Button onClick={this.handleDelete}>Delete</Button></td>



            </tr>
          </Table>
        </Card>
      </div>
    )
  }
}
