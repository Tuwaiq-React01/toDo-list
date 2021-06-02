import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List';


export default class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todoItem: "",
            listItem: []
          }
        }
        componentDidMount(){
          this.setState({listItem : ["MVC Project", "React Project"]} )
        }
        listChanged(event) {
            this.setState({ todoItem: event.target.value });
          }
        

          AddTask() {
              const result = [...this.state.listItem, this.state.todoItem];
              this.setState({todoItem: "", listItem: result});
            console.log(this.state.listItem);
          }

          
          ClearTask() {
            this.setState({ listItem: [] });
        }


          dropTask = index => {
            const list2 = [...this.state.listItem];
            list2.splice(index, 1);
            this.setState({ listItem: list2 });
          };
        
          updateTask = (event)=>{
            this.setState({
                todoItem: event.target.value
            });
          }
        
      
    render() {
        return (
            <div className="App">
                <List/>
                <br/>
 <input type="text" className="form-control" aria-label="Add" aria-describedby="basic-addon1"
        value={this.state.todoItem} onChange={this.listChanged.bind(this)}
        />
          <br/>
        <br/>
            <div>
            <ul className="list-group">
                

            {this.state.listItem.map((value,index) => {
             return <li className="list-group-item list-group-item-dark"> {value} 
            <button key={index} className="btn btn-danger" onClick={() => this.dropTask(index)}>X</button>
                </li> ;
                })}


            </ul>
              </div>
              <br/>
              <button className="btn btn-primary" onClick={this.AddTask.bind(this)}>
              Save Task
            </button>

              <button className="btn btn-warning" onClick={this.ClearTask.bind(this)}>
              Clear Tasks
            </button>

          </div>
        );
      }
    }
