import React, { Component } from "react";
import "./Item.css";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      newValue: "",
    };
  }
  edit() {
    console.log("edit");
    this.setState({ edit: !this.state.edit });
  }
  change(event) {
    this.setState({ newValue: event.target.value });
  }
  render() {
    // console.log(this.state.newValue);
    return (
      <div>
        <div className="ii">
          {this.props.index + 1}-{this.props.item}
        </div>
        <button
          className="btn btn-danger b"
          style={{ marginLeft: "15px", marginRight: "5px" }}
          onClick={() => this.props.del(this.props.index)}
        >
          delete
        </button>
        <button className="btn btn-secondary" onClick={() => this.edit()}>
          Edit
        </button>
        {this.state.edit ? (
          <div>
            <input onChange={(event) => this.change(event)} />
            <button
              onClick={() =>
                this.props.edit(this.props.index, this.state.newValue)
              }
            >
              Edit Now
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
