import React, { Component } from 'react';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speed: props.speed || 30,
        }
        this.increaseSpeed = this.increaseSpeed.bind(this)
        this.decreaseSpeed = this.decreaseSpeed.bind(this)
    }

    componentDidMount() {
        window.setTimeout(this.decreaseSpeed(),1000)
    }

    increaseSpeed() {
        this.setState({ speed: this.state.speed + 1 })
        window.setTimeout(this.increaseSpeed, 1000)
    }

    decreaseSpeed() {
        if (this.state.speed > 0) {
            this.setState({ speed: this.state.speed - 1 })
            window.setTimeout(this.decreaseSpeed, 1000)
        }
    }
    render() {
        return (
            <div>
                <h1>Current speed {this.state.speed}</h1>
            </div>
        );
    }
}

export default Car;
