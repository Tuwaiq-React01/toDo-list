import React, {Component} from 'react';
import Listing from "./Listing";

class Listcomp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isshow: true,
            listarray: JSON.parse(localStorage.getItem("arr")) || []
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        isshow: false,
                        listarray: []
                    })
                    localStorage.setItem("arr", JSON.stringify([]))
                }
                }>Clear List
                </button>
                <input id={"inputid"} type={"text"}/>
                <button onClick={() => {
                    this.state.listarray.push(document.getElementById("inputid").value)
                    console.log(this.state.listarray)
                    localStorage.setItem("arr", JSON.stringify(this.state.listarray))
                    this.setState({
                        listarray: this.state.listarray,
                        isshow: true
                    })
                }}>Add to List
                </button>
                {this.state.isshow ? <Listing list={this.state.listarray}/> : null}
            </div>
        );
    }
}

export default Listcomp;