import {Component} from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li>{this.props.title}</li>
        );
    }
}

export default Todo