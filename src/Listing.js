import React, {Component} from 'react';

class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: JSON.parse(localStorage.getItem("arr")) || [],
            list: this.props.list
        }
        this.fillarr = this.fillarr.bind(this)
    }

    componentDidMount() {
        this.fillarr()
    }

    fillarr() {
        this.setState({
            arr: JSON.parse(localStorage.getItem("arr"))
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map((item, index) => (
                        <li>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Listing;