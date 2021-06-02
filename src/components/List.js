import React, { Component } from "react";
import Item from "./Item";
import "./List.css";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      newValue: "",
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div className=" container ">
        {this.props.list.map((item, index) => {
          return (
            <div key={index} className="">
              <div className="item">
                <Item
                  item={item}
                  index={index}
                  del={this.props.del}
                  edit={this.props.edit}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
