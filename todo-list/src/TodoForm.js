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
        this.setState({ list: this.state.list.concat(this.state.task) })
        event.preventDefault();
    }
    render() {
        let lists = (this.state.list).map((item, i) => (
            <li className="w border-t border-gray-300 p-2" key={i}>{item}</li>
        ))
        return (
            <div className="w-2/3 md:w-1/2 m-auto my-9 p-4 shadow-2xl rounded-md border border-gray-100">
               <div className="flex items-baseline justify-around">
                    <form className="text-center"
                        onSubmit={this.handleSubmit}>
                        <input className="md:w-72  border border-gray-300 p-1 rounded-md mr-2 shadow-lg mb-4"
                            value={this.state.value} onChange={this.handleChange}
                            placeholder="type task"></input>
                        <button className="md:ml-9 text-center w-6 rounded-full bg-purple-300 pr-2 pl-2 shadow-lg"
                            type="submit">+</button>
                    </form>
                <div>
                    <button className="w-6 rounded-full bg-pink-300 pr-2 pl-2 shadow-lg"
                        onClick={() => { this.setState({ list: [], task: '' }) }}>-</button>
                </div>
                </div>
                <ul className="mt-4">
                    {lists}
                </ul>
            </div>
        )
    }
}
