import {Component} from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: []//["Sleep", "Programming", "Repeat"]
        }
    }

    addTodoItem(newTitle) {
        const _items = this.state.items
        _items.push(<Todo title={newTitle} />)

        // set local storage 
        const lsItems = JSON.parse(localStorage.getItem("TodoListItems"))
        lsItems.push(newTitle)
        localStorage.setItem("TodoListItems", JSON.stringify(lsItems))


        this.setState({
            items: _items
        })

        this.handleClearList = this.handleClearList.bind(this)
    }

    handleClearList() {
        this.setState({
            items: []
        })
    } 
    
    // componentWillUnmount() {
    //     const items = []
    //     this.state.items.forEach((value) => {
    //         items.push(value.props.title)
    //     })
    //     localStorage.setItem("TodoListItems", JSON.stringify(items))
    // }

    componentDidMount(){
        this.setState({
            items: JSON.parse(localStorage.getItem("TodoListItems"))
        })
    }


    render() {
        return(
            <div>
                <button
                    onClick={this.handleClearList}
                >Clear List</button>
                <ul>
                    {
                        this.state.items == 0 
                            ? <Todo title="No items" />
                            : this.state.items.map((value) => {
                                return <Todo title={value} />
                            })
                    }
                    
                </ul>
                
                <AddTodo addTodoItem={this.addTodoItem.bind(this)}/>
            </div>
        );
    }
}

export default TodoList