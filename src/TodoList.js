import React from 'react'

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
          item:'',  
          items: []
        }
      this.handleInputChange=this.handleInputChange.bind(this)
      this.addItem=this.addItem.bind(this)
    }
      handleInputChange(event){
        let name = event.target.name
        let value = event.target.value

        this.setState({[name]:value})
      }

      addItem(){
        let items = this.state.items
        let item = this.state.item
        items.push(item)
        this.setState({items:items})
        }

    render() {
        return (
       <div>
        <br></br>
        <br></br>
        <input type="text" name="item" placeholder="type your text here" onChange={this.handleInputChange}></input>
        <br></br>
        <br></br>
        <button type="button" onClick={this.addItem}>Add item</button>
 
        {this.state.items.map((item)=> {
            return (
            <p>{item}</p>
            )
        })}
      </div>
          
        )
    }
    }
export default TodoList;