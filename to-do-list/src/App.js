
import React, { Component } from 'react'
import ToDo from './ToDo'
export default class App extends Component {

     constructor(props){
         super(props)
       this.state={
             Todo:[],
             value:"",
         };
         this.handleChange =this .handleChange.bind(this);
         this.addTodo-this .addTodo.bind(this);
     }
     handleChange(event) {
        this.setState({ value: event.target.value });
      }
    
      componentDidMount() {
        this.defaultTodo();
      }
    
      defaultTodo() {
        this.setState({
          todos: [ "Water", "Walk"],
        });
      }
    
      addTodo = (event) => {
        this.setState((state) => {
          const todos = [...state.todos, state.value];
          return {
            todos,
            value: "",
          };
        });
    
        event.preventDefault();
      };
    
      clearTodo = (event) => {
        this.setState({ todos: [] });
      };
    render() {
        return (
            <div>
                <div>
        <h1>My Todo List </h1>

        {this.state.todos.map((todo) => (
          <Todo todo={todo} />
        ))}

        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.addTodo} >
          Add Task
        </button>
        <button type="button" onClick={this.clearTodo} className="clear">
          Clear Tasks
        </button>
      </div>
            </div>
        )
    }
}

