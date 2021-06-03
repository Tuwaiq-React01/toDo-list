import React, { Component } from 'react'
import { Form, Button, list } from "react-bootstrap";

export default class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: [],

        };
    }
    componentDidMount()
    {
        this.setState({value:"have a cup of tea"})
        this.onAddItem();
    }

    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };

    onAddItem = () => {
        this.setState(state => {
            const list = state.list.concat(state.value);
            return {
                list,
                value: '',
            };
        });
    };

    clearList = (e) => {
        this.setState({
            list: []
        })
    }

    render() {
        return (
            <div>
                <Form className='text-center'>
                    <ul className='list-group'>
                        {this.state.list.map(item => (
                            <li className="list-group-item" key={item}>{item}</li>
                        ))}
                    </ul>
                    <input type="text" value={this.state.value} onChange={this.onChangeValue} />
                    <br />
                    <Button className="btn btn-warning" type="button" onClick={this.onAddItem}>Add item</Button>
                    <br />
                    <Button className="btn btn-warning" onClick={this.clearList}>Clear List</Button>
                </Form>
            </div>
        )
    }

}