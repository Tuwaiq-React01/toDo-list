import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
         item : "",
         list : []
        }
        this.appendList = this.appendList.bind(this);
    }
      componentDidMount(){
        this.setState({
            list: ["Read", "Write", "Play", "Study"]
        })
    }
    addItem(){
        let list = this.state.list
        list.push(this.state.item)
        this.setState({
            list,
            item: ""
        })
    }
    appendList(event) {
        this.setState({
            item : event.target.value
        })
    }
    removeItem(){
        let list = this.state.list
        list.splice(0, list.length)
        this.setState({
            list
        })
    }



    render(){
        const list = this.state.list.map((item, index) => {
            return <li key={index}>
                  {item}
                  </li> 
        })
        return (
            <div>
                <h2>To Do List : </h2>
                <ul id="list">
                 {list}
                </ul>
              
                <input type="text" value={this.state.item} placeholder="Enter what to do " onChange={this.appendList} />

                <button  className="btn btn-dark" onClick={()=>this.addItem()}>Add item</button><br></br>

                <button  className="btn btn-danger" onClick={()=>this.removeItem()}>Remove list</button><br></br>
              
            </div>
           
        );
    }
    }
