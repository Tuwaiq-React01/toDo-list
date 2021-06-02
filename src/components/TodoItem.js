import React, { Component } from 'react';
import { Col, Button, ListGroupItem, Input } from 'reactstrap';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {checked: false};
    }
    render() {
        return (
            <>
                <ListGroupItem>
                    <Input type="checkbox" onClick={() => this.setState({checked: !this.state.checked})} />
                    {
                        this.state.checked ?
                        <span className="mx-3 checked">{this.props.value}</span> :
                        <span className="mx-3">{this.props.value}</span>
                    }
                    <Button color="danger" style={{padding: "0.1px 6px 0.1px 6px"}} onClick={this.props.delete}>X</Button>
                </ListGroupItem>
            </>
        )
    }
}
