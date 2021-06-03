import React, { Component } from "react"; 
import Lists from "./Lists";

class App extends Component { 
  constructor(props) {    
    super(props);     

    this.state = {    
      items: []  
    };

    this.addItem = this.addItem.bind(this); 
  }

  addItem(e) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {    
      itemArray.push(
        {      
          text: this._inputElement.value,      
          key: Date.now()    
        }
      );

      this.setState({      
        items: itemArray    
      });   

      this._inputElement.value = "";  
    }   
    console.log(itemArray);   
    e.preventDefault();
  }

  componentDidMount(){
    var c = 1;
    if (c==1){
      this.firstTime();
    }
    this.state.c=2;
  }
  
  firstTime(){
    var itemArray = this.state.items;
    var count=1;
    itemArray.push(
      {      
        text: "Apple",      
        key: count    
      },
      {
        text: "Orange",      
        key: count 
      },
      {
        text: "Banana",
        key: count
      }
    );
      this.setState({      
        items: itemArray,
        count: count+1    
      });   

      this._inputElement.value = "";  
      this.state.itemArray= [];
    console.log(itemArray);   
  }

  resetItems(){
    var itemArray = this.state.items;
      this.setState({items: []});
    console.log(itemArray);   
  }
  

  render() {
    return (      
      <><div id="container" className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>

        <Lists entries={this.state.items} />
      </div><button onClick={() => this.resetItems()}>Reset</button></>
    );  
  }
} 

export default App;