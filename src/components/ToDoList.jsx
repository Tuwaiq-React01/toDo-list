import React, { Component } from 'react';

class ToDoList extends Component {

    constructor(){
        super()
        this.state ={
            myList : [],
            newvalue : "",
            currentValue: "",

          }
    }

    // shouldComponentUpdate (){
      
    // }

    componentDidMount(){
        this.setState({myList:['Shoping', 'Reading'] })
        console.log(this.state.myList); 
    }

     handelOnClick = (e) => {
        this.setState({myList: [...this.state.myList, this.state.newvalue]})
//this.forceUpdate()  = to rerender the componet

                       }
  
    handelDelete = (name) => {
        var array = [...this.state.myList]; // make a separate copy of the array
        var index = array.indexOf(name)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({myList: array});
        }
      }

    handelClear = () =>{
        var array = []; // make a separate copy of the array
          this.setState({myList: array}); 
    }

    render() {
      
        return (



<div class="container">
<h1 class="display-3">My List</h1>

<div class="row">
    <ul class="list-group">
        {this.state.myList.map((name, index) => (
        <li class="list-group-item" key={ index }>{name}      <button type="button" class="btn btn-danger"  onClick={() => this.handelDelete(name)} >Delete</button>
        </li> 
        ))}
    </ul>
</div>



    <div class="col">
    <div class="form-group">
      <h2>Task:</h2>
      <input type="text" class="form-control" id="" onChange={(e) =>this.setState({ newvalue: e.target.value })}  />
      <button type="button" class="btn btn-primary  btn-block" onClick={() => this.handelOnClick()} >submit</button>
    </div>
    </div>
        <div class="w-100"></div>
        <div class="col">
       
      <button type="button" class="btn btn-secondary btn-lg" onClick={() => this.handelClear()}>Clear</button>
     
      </div>

  
       

</div>
        
        );
    }
}

export default ToDoList;