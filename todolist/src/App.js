import React, { Component } from 'react'
import Todo from './Todo'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Card, Container, FormControl } from 'react-bootstrap';

export default class App extends Component {
  state = {
    items: ["Shopping", "Drawing", "Read a book"],
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
              <h1>My List</h1>
            </tr>
            <tr>
              <div >
                <Todo items={this.state.items} />
              </div>
            </tr>
            <tr>
              <td>
                <FormControl type="text" value={this.state.value} onChange={this.handleChange} aria-label="First name" />
              </td>
              <td><Button bg="danger" onClick={this.handleClick}>Add</Button>
                <Button className="Button" onClick={this.handleDelete}>Delete</Button></td>
            </tr>
          </Table>
        </Card>
      </div>
    )
  }
}
