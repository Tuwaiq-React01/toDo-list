import React, { Component } from 'react';
import TodoItem from '../components/TodoItem';
import { Col, Label, Input, Button, ListGroup } from 'reactstrap'

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {todoItem: "", todoList: []};
    }

    render() {
        return (
            <>
                <Col xs={8}>
                    <Label for="todoItem">Todo item</Label>
                    <Input
                        type="text"
                        name="todoItem"
                        id="todoItem" onChange={(event) => this.setState({todoItem: event.target.value})}
                        value={this.state.todoItem}
                        placeholder="code(); eat(); sleep(); repeat();" />
                </Col>
                    
                <Col xs={2}>
                    <Button onClick={() => {
                            const result = this.state.todoList;
                            result.push(this.state.todoItem);
                            this.setState({todoItem: "", todoList: result });
                        }} className="mt-4 w-100">Add</Button>
                </Col>

                <Col xs={2} className="mb-5" >
                    <Button className="mt-4 w-100" onClick={() => this.setState({todoItem: "", todoList: [] })} >Clear</Button>
                </Col>

                <Col xs={12}>
                    <ListGroup>
                        {
                            this.state.todoList.map((value, index) => {
                                return <TodoItem key={index} value={value} delete={() => {
                                    const result = this.state.todoList;
                                    result.splice(index, 1);
                                    this.setState({todoList: result});
                                }}/>
                            })
                        }
                    </ListGroup>
                </Col>
            </>
        )
    }
}
