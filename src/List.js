import React, { Component } from 'react'
import Item from './Item';

export default class List extends Component {
    constructor(props){
        super(props);

        this.state={
            itemsList: props.itemsList, 
            newItem: ""
        }
    }

    onChangeText(e){
        this.setState({
            newItem: e.target.value
        })

    }

    addTheItem(e){
        e.preventDefault();

        this.setState({
            itemsList: this.state.itemsList.concat(this.state.newItem)
        })
    }

    clearTheList(e){
        e.preventDefault();
        this.setState({
            itemsList: []
        })
    }

    render() {
        let itemsList = this.state.itemsList.map((element, index) => (
            <Item item={element} key={index}/>
        ))

        console.log(this.state.newItem);
        return (
            <div>
                <ul>
                {itemsList}
                </ul>
                <form>
                    <input type="text" onChange={(e) => this.onChangeText(e)} value={this.state.newItem}/>
                    <button onClick={(e)=> this.addTheItem(e)}>Add the item</button>
                    <button onClick={(e) => this.clearTheList(e)} placeholder="Add your item here!!">CLear the list</button>
                </form>
                
            </div>
        )
    }
}
