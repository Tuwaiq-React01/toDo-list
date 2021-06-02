import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import List from "./components/List";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newValue: "",
    };
    this.submit = this.submit.bind(this);
    this.clearList = this.clearList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  componentDidMount() {
    this.setState({ list: ["Math", "Programming"] });
  }

  change(event) {
    // console.log(event);
    this.setState({ newValue: event.target.value });
  }

  submit() {
    // localStorage.setItem("asdfsad", this.state.speed);
    // localStorage.removeItem("asdfsad");
    // let newlist = this.state.list.push(this.state.newValue);
    this.setState({ list: [...this.state.list, this.state.newValue] });
  }

  clearList() {
    this.setState({ list: [] });
  }

  deleteItem(id) {
    this.setState({
      list: this.state.list.filter((item, index) => index !== id),
    });
  }

  editItem(id, value) {
    // console.log(id, value);
    let newList = [...this.state.list];
    let item = { ...newList[id] };
    item = value;
    newList[id] = item;
    this.setState({ list: newList });
  }

  render() {
    return (
      <div className="App">
        <h1>My List</h1>
        <div className="con">
          <input onChange={(event) => this.change(event)} />

          <Button cliked={this.submit} which={"Submit"} />
          <Button cliked={this.clearList} which={"Clear the List"} />

          <div className="list" style={{ marginTop: "50px" }}>
            <List
              list={this.state.list}
              del={this.deleteItem}
              edit={this.editItem}
            />
          </div>
          {/* </tbody>
          </table> */}
        </div>
      </div>
    );
  }
}
