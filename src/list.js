import React, { Component } from 'react';
import Item from './item'
import './App.css';

export default class list extends Component {
    constructor(props){
        super(props);
        this.state={
            arr : []           
        }
        this.clearList=this.clearList.bind(this)
        this.addItem=this.addItem.bind(this)
        
    }    
    shouldComponentUpdate(){
      return true
    }
    addItem(){   
        this.setState({arr: [...this.state.arr,document.getElementById("item").value]})  
    }
    
    clearList(){
      this.setState({arr: []})
    }

    componentWillUnmount(){
        this.clearList()
    }

    render() {

        return (
            <div className="f">

                <button onClick={()=>this.clearList()}>Clear List</button>
                <Item list = {this.state.arr}/>                
                <input type="text" id="item" name="item"></input> <br/>
                <button onClick={()=>this.addItem()}>Add item to the list </button>
                
            </div>
        )
    }
}
