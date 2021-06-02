import React, { Component } from 'react'
export default class ListItem extends Component {

  componentWillUnmount() {
    alert("sorry for not delete item when you click !!!")
  }

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

      deleteItem(e) {
        e.preventDefault();
          this.setState({
            toDoItemArray: this.props.toDoItemArray.splice(this.props.doThis,1)
          });

        }
          handleClick() {
            this.setState(prevState => ({
              isToggleOn: !prevState.isToggleOn
            }));
          }

    render() {
        return (
            <div>
                 <li>
                   <span onClick={this.handleClick} className={(this.state.isToggleOn) ? "" : "strike"}>{this.props.doThis}{" "}</span>
                 <button>Edit</button>
                 <button onClick={(e) => this.deleteItem(e)}>Delete</button>
                 </li>
            </div>
        )
    }
}