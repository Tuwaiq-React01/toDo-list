import React, { Component } from 'react';

class MoodTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moodpoints: 1,
            anotherValue: "value",
            isToggleOn: false,
        }

    }
    render() {
        return (
            <div>
                <h1>{this.state.moodpoints}</h1>
                <button onClick={() => {
                    this.setState({
                        moodpoints: ++this.state.moodpoints,
                    })
                }}>
                    Mood Up
                </button>

                <h1>{this.state.isToggleOn ? "on" : "off"}</h1>
                <button onClick={() => {
                    this.setState({
                        isToggleOn: !this.state.isToggleOn,
                    })
                }}>
                    Toggle
                </button>

            </div>
        );
    }
}

export default MoodTracker;
