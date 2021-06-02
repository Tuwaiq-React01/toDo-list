import React, { Component } from 'react'


export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    addTasks(e) {
        e.preventDefault();
        this.setState({
            task: this.state.task
        })
    }
    handleChange(event) {
        this.setState({ task: event.target.value });
    }
    handleSubmit(event) {
        this.setState({list: this.state.list.concat(this.state.task)})
        event.preventDefault();
    }
    render() {
        let lists = (this.state.list).map((item,i)=>(
            <li key={i}>{item}</li>
        ))
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.value} onChange={this.handleChange}
                        placeholder="type task"></input>
                    <button type="submit" >Add</button>
                </form>
                <button onClick={()=>{this.setState({list:[]})}}>clear</button>
                <ul>
                {lists}
                </ul>
            </div>
        )
    }
}
