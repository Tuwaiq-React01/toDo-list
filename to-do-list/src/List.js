import React, { Component } from 'react'

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
            list: ["Do My homework", "Study for the test", "Watch TV"]
        })
    }
    addToList(){
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
    removeList(){
        let list = this.state.list
        list.splice(0, list.length)

        this.setState({
            list ,
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
                <h1>My List : </h1>
                <button onClick={()=>this.removeList()}>Clear list</button><br/>

                <ul id="list">
                 {list}
                </ul>
              
                <input type="text" value={this.state.item} placeholder="Type your text here" onChange={this.appendList} />

                <br/>
                <button onClick={()=>this.addToList()}>Add item</button><br></br>

            </div>
           
        );
    }
    }