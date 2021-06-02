import React, { Component } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export default class Item extends Component {

  render() {
    const displayList = this.props.list.map((l, i) => {
      return (
        <li className="list-group-item d-flex justify-content-between align-items-right" key={i}>
          {l}
          <a onClick={() => this.props.deleteTodo(i)}> <AiFillCloseCircle className="deleteItem" size={25} color={'#dc3546'} /> </a>
        </li>
      );
    });
    return (
      <div className="container">
        <ul className="list-group w-25">{displayList}</ul>
      </div>
    );
  }
}
