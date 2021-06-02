import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Card, Container } from 'react-bootstrap';

export default class Todo extends Component {
    render() {
        const { items } = this.props;
        const theItems = items.map(item => {
            return (
                <div key={Math.random()}>
                    <ul>
                        <li>{item}</li>
                    </ul>
                </div>
            )
        })
        return (
            <div>
                {theItems}
            </div>
        )
    }
}
