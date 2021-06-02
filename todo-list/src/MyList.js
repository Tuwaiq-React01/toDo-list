import React, { Component } from "react";
import ListItem from "./ListItem";
import "./App.css"
import Logo from './Assets/XArtSaad.png'
export default class MyList extends Component {


  constructor(props) {
    super(props);
    this.state = {
      toDoItemArray:["Buy Icecream", "Eat Icecream", "Go to Gym", "Buys Masks", "Buy Sanitizer", "Buy grocery for Ramdhan"],
      newItem: "",
    };
  }

  clearList(e) {
    e.preventDefault();
    this.setState({
      toDoItemArray: [],
    });
  }
  onChange(e) {
    this.setState({
      newItem: e.target.value,
    });
  }
  addItem(e) {
    e.preventDefault();
    if (this.state.newItem !== "") {
      this.setState({
        toDoItemArray: this.state.toDoItemArray.concat(this.state.newItem),
        newItem: "",
      });
    }
  }
  render() {
    const todoItems = this.state.toDoItemArray.map((item, key) => (
      <ListItem doThis={item} key={key} toDoItemArray={this.state.toDoItemArray}/>
    ));
    console.log(this.state.toDoItemArray);
    console.log(this.state.newItem);
    return (
      <div className="App-header">
          <img className="App-myLogo" src={Logo} />
        <h1>Things We Should Stop Procrastinating</h1>
        <ul>{todoItems}</ul>
        <form>
          <button onClick={(e) => this.clearList(e)}>Finished the List!</button>
          <input
            type="text"
            onChange={(e) => this.onChange(e)}
            placeholder="Type your input here"
            value={this.state.newItem}
          ></input>
          <button onClick={(e) => this.addItem(e)}>Add This Item</button>
        </form>
      </div>
    );
  }
}