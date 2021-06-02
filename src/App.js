import React, { Component } from 'react'
import Header from './Components/Header'
import MyButton from './Components/MyButton'
import TodoList from './Components/Todolist'


export default class App extends Component {
  constructor(props) {
    super(props)  
    this.state = {
      listoftodos: [], 
      todoItem: " " 
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

  }

 componentDidMount() {
  
  this.setState({
    listoftodos : localStorage.getItem("ListOfTodos").split(",")
   })
    
 } 

 
  handleChange(e){
    this.setState({
      todoItem: e.target.value,    
  })
  }

  handleAdd(){ 
    console.log("jdjdj")
    this.setState({
      listoftodos : [...this.state.listoftodos,this.state.todoItem]
    })
    localStorage.setItem("ListOfTodos",[...this.state.listoftodos,this.state.todoItem])
  }

   handleClear(){
    this.setState({
      listoftodos : []
    })
    localStorage.setItem("ListOfTodos",[])
   }


   handleDelete(m){
     console.log(m)
     this.state.listoftodos.splice(m,1)
     this.setState({
        listoftodos : this.state.listoftodos
     })
     localStorage.setItem("ListOfTodos",this.state.listoftodos)

   }
  render() {
    return (
      <div className="MainContainer">
        <MyButton text = "Clear All" onClickMe={this.handleClear} />
         <Header title="Todolist"/> 
          <div className="container">
          <TodoList listOftodos= {this.state.listoftodos} handleDelete= {this.handleDelete}/>
          </div> 
            
          
          <input type="text" placeholder="Enter your Text Here" className="input-text" value={this.state.todoItem} onChange={this.handleChange}/>
          <MyButton text= "Add" onClickMe={this.handleAdd}/>
      </div>
    )
  }
}

