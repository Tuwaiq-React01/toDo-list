import React, { Component } from 'react'
import "./Todolist.css"

export default class Todolist extends Component {

    constructor(props) {

        super(props);

        this.state = {
            list: [],
            listItems: ""
        }

    }

    componentDidMount() {
        this.setState({
            listItems: ["write your things here"]
        })
    }

    updateTheList() {
        this.setState({
            list: [],
            listItems: ""
        })
    }

    onChange(event) {
        this.setState({
            listItems: event.target.value
        })
    }

    additemsToList(event) {
        event.preventDefault()
        const list = this.state.list
        list.push(this.state.listItems)
        this.setState({
            list,
            listItems: ""
        })
    }

    deleteItemsFromList(value){
        const list = this.state.list
        list.splice(value,1)
        this.setState({
            list
        })      
    }


    render() {

        const items = this.state.list.map((value, index) => {
            return (<li className="list-group-item list-group-item-action list-group-item-warning" key={index}>{value}<button className="btn btn-danger margin-left margin-bottom" onClick={() => this.deleteItemsFromList(index)} >Delete</button></li>)
        })
        return (
            <div>
                <h1>My List</h1>
                <ul className="list-group list-group-flush list-group-numbered">
                    {items}
                </ul>
                <button className="btn btn-danger" onClick={() => this.updateTheList()}>Reset List</button>
                <form action="" onSubmit={(event) => this.additemsToList(event)} className="row">
                    <div className="input-group mb-3 col-3">
                        <input id="listItems" type="text" value={this.state.listItems} onChange={(event) => this.onChange(event)} className="col-3" />
                        <input type="submit" value="Add item" className="btn btn-success" />
                    </div>
                </form>
                
            </div>
        )
    }
}