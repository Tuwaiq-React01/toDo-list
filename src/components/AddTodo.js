import {Component} from 'react'

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleClick(event) {
        this.props.addTodoItem(this.state.title)
        this.setState({
            title: ""
        })
    }

    render() {
        return(
            <div>
                <input 
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                />

                <button
                    onClick={this.handleClick}
                >
                    Add Item
                </button>
            </div>
        )
    }
}

export default AddTodo