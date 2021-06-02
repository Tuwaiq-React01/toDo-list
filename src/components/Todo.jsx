import React, { Component } from "react";
import Item from "./Item";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "",
      theList: [],
    };
    this.addToList = this.addToList.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    this.setState({ theList: this.props.list });
  }

  addToList() {
    this.setState({
      theList: [...this.state.theList, this.state.currentInput],
    });
  }

  setList(e) {
    this.setState({ currentInput: e.target.value });
  }

  deleteTodo(id){
    this.setState({
        theList: this.state.theList.filter((item, index) => index !== id)
      });
  }


  render() {
    return (
      <div>
        <h1 className="display-5">My Todo List: </h1>
        <hr />

        <form>
          <div className="row">
            <div class="col-4">
              <input
                className="form-control form-control-sm"
                type="text"
                onChange={(e) => this.setList(e)}
              />
            </div>
            <div class="col-4">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.addToList}
              >
                ADD
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm mx-2"
                onClick={() => this.setState({ theList: [] })}
              >
                CLEAR
              </button>
            </div>
          </div>
        </form>

        <br />

        <Item list={this.state.theList} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
