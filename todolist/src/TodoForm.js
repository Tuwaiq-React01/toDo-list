import React, { Component } from 'react'
import ShortId from 'shortid';

export default class TodoForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            text:""
    
        };
    };

    handleChange = (event)=>{
        this.setState ({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        //submit all to dos, save in state as array
        this.props.onSubmit({
            id:ShortId.generate(),
            text: this.state.text,
            complete: false
        })
        this.setState({
            text:""
        });
    };
    
    
    

    render() {
        return (
            <form className="text-center" onSubmit={this.handleSubmit}>
                <input style={{display:"flex",justifyContent : "center"}}name="text" value={this.state.text} onChange={this.handleChange} placeholder="Enter To Do....."></input>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Add item</button>
            </form>
            
        )
    }
}
