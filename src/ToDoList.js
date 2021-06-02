import React, { Component } from 'react';
import Items from './Items'

export default class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state={
            list : [] 
            
           
        }
        this.RemoveItems=this.RemoveItems.bind(this)
        this.AddItem=this.AddItem.bind(this)
        
    }
    componentDidMount(){
         this.AddItem() 
         this.RemoveItems() 
     
      }
      shouldComponentUpdate(){
          // should if we refreshed the component or did if statement and the component reached that condition continue to mount and change speeds ? 
          
        //   if(this.state.mounted ){
        //       return true;
        //   } else{ return false ;}
        return true;
      }
       
    RemoveItems(){
        this.setState({list : [] });
        
    }
    AddItem(){
        // this.setState({list: "item"})
        
        this.setState({list: [...this.state.list,document.getElementById("litem").value]})
      
                
    }
    push(){

    }

    
    render() {
        return (
            <div className="container-fluid position-absolute top-50 start-50">
                <button onClick={()=>this.RemoveItems()}>Clear List </button>
                <Items listArray = {this.state.list}/>
                <input type="text" id="litem" name="litem"></input>
                <button id="un" onClick={()=>this.AddItem()}>Add item to the list </button>
            </div>
        )
    }
}
