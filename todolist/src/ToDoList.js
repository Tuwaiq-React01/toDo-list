import React, { Component } from 'react'

export default class todolist extends Component {
    constructor(props){
        super(props)
        this.state={
            NewItem:" ",
            items:[ ]
        }
    }

    componentDidMount() {
        this.defultArray();
    }    

    defultArray(){
        this.setState({ items:[
            {text:"Shopping"},
            {text:"Gym"},
            {text:"Read a Book"}
        ]});
    }

    ClearList=()=>{
        this.setState({items:[]})
    }

    AddItem=()=>{
        const todolist=[...this.state.items];
        todolist.push({text:this.state.NewItem})
      
        this.setState({
           items: todolist
        });
    }
  
    updateItem=(e)=>{
        this.setState({ 
             NewItem:e.target.value
        });
    }


    render() {

        return (
            <div >
                <ul class="list-group list-group-flush"  >
                {
                this.state.items.map((item,index)=>
                <li class="list-group-item " key={index}>
                <h4>{item.text} </h4>   
                </li>)
                }
                </ul>
                <br/>
                <input type="text" value={this.state.NewItem} onChange={this.updateItem} class="form-control"  />
                <br/><br/><br/>
                <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" class="btn btn-danger" onClick={this.AddItem}>Add Task</button>
                <button class="btn btn-primary" class="btn btn-danger"onClick={()=>this.ClearList()}>Clear List</button>
                </div>
            
           </div>
        )
    }
}
