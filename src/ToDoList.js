import React, { Component } from 'react'

export default class ToDoList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            List: [],
            newToDo: ""
        }

    }

    componentDidMount() {
        this.setState({
            List: ["Study", "Play", "Eat", "Sleep"]
        })
    }

    clearList() {
        this.setState({
            List: [],
            newToDo: ""
        })
    }

    handleChange(event) {
        this.setState({
            newToDo: event.target.value
        })
    }

    addToDo(event) {
        event.preventDefault()
        let List = this.state.List
        List.push(this.state.newToDo)
        this.setState({
            List,
            newToDo: ""
        })
    }

    removeToDo(index){
        let List = this.state.List
        List.splice(index,1)
        this.setState({
            List
        })      
    }


    render() {

        const items = this.state.List.map((value, index) => {
            return (<li className="list-group-item list-group-item-action list-group-item-warning" key={index}>{value}<button className="btn btn-danger margin-left margin-bottom" onClick={() => this.removeToDo(index)} >Delete</button></li>)
        })
        return (
            <div>
                <h1>To do List</h1>
                <ul className="list-group list-group-flush list-group-numbered">
                    {items}
                </ul>
                <form action="" onSubmit={(event) => this.addToDo(event)} className="row">
                    <div className="input-group mb-3 col-3">
                        <input id="newToDo" type="text" value={this.state.newToDo} onChange={(event) => this.handleChange(event)} className="col-3" />
                        <input type="submit" value="Add ToDo" className="btn btn-success" />
                    </div>
                </form>
                <button className="btn btn-danger" onClick={() => this.clearList()}>Clear List</button>
            </div>
        )
    }
}
