import React, { Component } from 'react';
import Task from "./MyTask";
import List from "./List";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowList : false ,
    AddTask: "",
    ToDoListList: [
      {text: 'learn ReactJs'},
      {text: 'learn .Net'},
      {text: 'learn Uint Test'},
      {text: 'learn design patterns'},
    ]


  }

}


toggle() {
  this.setState({ ShowList: !this.state.ShowList })
}
  completeTask = (index) => {
    const ToDoListList = [...this.state.ToDoListList];
    
    ToDoListList.splice(index, 1);

    this.setState({
      ToDoListList
    });
  }

  updateAddTask = (event)=>{
    this.setState({
      AddTask: event.target.value
    });
  }
  ClearList = ()=>{
    this.setState({
      ToDoListList : []
    });
  }
  componentDidMount() {
    alert("Welcom to To 'do List' ");
}
shouldComponentUpdate() {
  if (this.state.AddTask.length > 30) {

      return false;
  } else {
      return true

  }
}
  addTask = ()=>{
    const ToDoListList = [...this.state.ToDoListList];
    ToDoListList.push({
      text: this.state.AddTask
    });
    this.setState({
      ToDoListList,
      AddTask: ''
    });
  }

  
  render() {
    return (
      <div className="container text-center pt-3">
         <button  class="btn btn-info" onClick={() => this.ClearList()}> Delete List </button>

         <br/> <br/>
        <h1 style={{fontFamily:"cursive"}}>To Do List : </h1>    
        {this.state.ToDoListList.map((ToDoList, index) => 
          <Task ToDoList={ToDoList} completeTask={()=>this.completeTask(index)} key={index} />
        )}
        <List value={this.state.AddTask} 
          onChange={this.updateAddTask} 
          addTask={this.addTask} />
           
          
      </div>
    );
   
  }
}

export default App;