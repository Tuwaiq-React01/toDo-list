import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div style={{ display: "inline", paddingLeft: "30px" }}>
        <button className="btn btn-primary row" onClick={this.props.cliked}>
          {this.props.which}
        </button>
      </div>
    );
  }
}
