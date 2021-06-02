import './App.css';
import React, { Component } from 'react';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: "",
      items:[],
    }
    this.removeHandler = this.removeHandler.bind(this);
  }
  
  componentDidMount(){
    this.setState({items:[...this.state.items,...["first item","second item"]]});
  }

  shouldComponentUpdate(){
    if(this.state.items.length>5) {return false}
    else return true;
  }

  removeHandler(index){
    this.setState({
      items: this.state.items.filter((_, i) => i !== index)
    });
  }
  render() {
    
    return (
      <div className="App">
        <h1>My ToDo List</h1>
        <button onClick={() => this.setState({ items: [] })}>Clear List</button>
        <form>
        <br></br><label>Add new todo </label><br></br>

          <input type="text" name="item" value={this.state.inputData} onChange={(e)=>{
            this.setState({inputData:e.target.value});
          }}/>
          <input type="submit" value="Add" onClick={(e)=>{
            e.preventDefault();
            if(this.state.inputData.length>0) this.setState({items:[...this.state.items,this.state.inputData]});
            this.setState({inputData:""});
          }}/>
          
        </form>
        <br></br>
        <hr></hr>
        <List items={this.state.items} removeHandler={this.removeHandler}/>
      </div>
    );
  }
}

export default App;
