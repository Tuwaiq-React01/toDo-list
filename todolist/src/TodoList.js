import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
/*

1. add todo
  2. display todos
  3. cross off todo
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if atleast one is complete
  8. button to toggle all on/off

 */

export default class TodoList extends Component {
    state ={
        todos: [],
        toShow: 'all'
    }

    addTodo=(todo)=>{
        
        this.setState({
            todos:[todo, ...this.state.todos]
        })

    }

    toggleComplete = (id) =>{
        this.setState({
            todos:this.state.todos.map(todo => {
                //update
                if (todo.id === id){
                    return{
                        ...todo,
                        complete: !todo.complete
                    }

                }
                else{
                    return todo;
                }
            })
        })

    };

    updateTodoToShow =(str)=>{
        this.setState({
            toShow : str

        })

    }

    handleDelete = (id) => {
        this.setState ({
            todos : this.state.todos.filter(todo =>todo.id !== id)

        })
    }


    render() {
        let todos =[];
        if(this.state.toShow==='all'){
            todos = this.state.todos
        }
        else if(this.state.toShow==='active'){
            todos = this.state.todos.filter(todo => !todo.complete)
        }
        else if(this.state.toShow==='complete'){
            todos = this.state.todos.filter(todo => todo.complete)
        }



        return (
            <div>
                <TodoForm onSubmit={this.addTodo}/>
                {todos.map(todo =>(<Todo key={todo.id}  toggleComplete={()=>this.toggleComplete(todo.id)} toDeleteToDo={() =>this.handleDelete(todo.id)}
                 todo={todo}/>))}
                 <div>
                     To Do Left : {this.state.todos.filter(todo =>!todo.complete).length}
                 </div>
                 <div>
                     <button onClick={()=>this.updateTodoToShow("all")}>all</button>
                     <button onClick={()=>this.updateTodoToShow("acitve")}>active</button>
                     <button onClick={()=>this.updateTodoToShow("complete")}>complete</button>
                 </div>
            </div>
        )
    }
}
