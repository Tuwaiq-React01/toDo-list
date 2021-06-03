import React, { Component } from 'react'
import Item from './Item';

export default class List extends Component {
    constructor(props){
        super(props);
        this.state={
            clearList: false, 
            list: []
            
        }
        this.RemovList=this.RemovList.bind(this);
        this.addLisat= this.addLisat.bind(this);
    }
    componentDidMount(){
        this.RemovList();
        this.addLisat();
    }
    shouldComponentUpdate(){
        return true;
    }
    RemovList(){
        this.setState({clearList: true})
        this.setState({list: []})
      }
    addLisat(){
        this.setState({list: [...this.state.list , document.getElementById("textAdd").value]})
        
        this.setState({clearList:this.state.clearList == true? !this.state.clearList : this.state.clearList })

    }

    
    render() {
        return (
            <div>
                <Item lsA={this.state.list}/>
                {!this.state.clearList ? <Item /> : <div>Nothing in the list</div>}
                <br></br>
                <button type="button" class="btn btn-primary" onClick={()=> this.RemovList()}>Clear List</button>
                <br></br>
                <br></br>
                <button type="button" class="btn btn-warning" onClick={()=> this.addLisat()}>Add Item</button>
                <br></br>
                <br></br>
                <input type="text" id="textAdd"></input> 
                

                
            </div>
        )
    }
}
