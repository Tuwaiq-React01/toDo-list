import React, { Component } from 'react'
import List from './List'
import { Button, InputGroup, FormControl,Modal ,closeButton} from 'react-bootstrap';





export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            list: [],
            cheeck: true,
            show:false,
            cheeckClear:false,

        }
    }

    componentDidMount() {
            this.setState({list:["add your list"]})
    }

    componentWillUnmount() {
        alert("To Do list Closed")
    }


    shouldComponentUpdate() {
       if(this.state.list.length > 10000){
        alert("Your list is to long !!!")
           return false
       }
       else{
           return true
       }
        
    }
    render() {

        let printlist =  this.state.list.map((item, i) => {
            return this.state.cheeck ? <List item={item} /> : null
        })

        

        let itemChange = (e) => {
            this.setState({ text: e.target.value });

        };

        let AddItem = (e) => {
            if (this.state.text !== "") {
                this.setState({ cheeck: true });
                this.state.list.push(this.state.text);
                this.setState([...this.state.list]);
                document.getElementById("list").value = "";
                this.setState({ text: "" });
            }

        };

        const handleClose = () => {
            this.setState({show:false})
        }
const handleShow = () => {
    this.setState({show:true})
}

const handleYes = (e)=>{
    console.log("test 11")
    this.setState({cheeckClear:true})
    setTimeout(() => {
        clearItem(e)
      }, 10);
    
}
const handleNO = ()=>{
    console.log("test 11")
    this.setState({cheeckClear:false})
}

        let clearItem = (e) => {
            console.log("ldkncnlk" + this.state.cheeckClear)
            if(this.state.cheeckClear){
                this.setState({ cheeck: !this.state.cheeck});
                this.setState({ list: [] });
            }

            

        };

        return (
            <div>
                <div style={{ margin: "auto", width: "50%", border: "1px solid black", marginTop: "50px", padding: "15px", borderRadius: "8px" }}>
                    <h1>My list</h1>

                    <InputGroup style={{ width: "100%" }}>
                        <FormControl
                            id="list"
                            placeholder="Recipient's username"
                            onChange={(e) => { itemChange(e); }}
                        />
                        <Button onClick={(e) => AddItem(e)} variant="outline-primary">Add To list</Button>
                        <Button  onClick={(e) => { handleShow();}} variant="outline-danger">clear list</Button>
                    </InputGroup>

                    <Modal show={this.state.show} onHide={(e) => { handleClose(); handleNO()}} animation={true}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Deletion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to remove all the list ?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={(e) => { handleClose(); handleNO()}} >
                                No
                                
                           </Button>
                            <Button variant="primary" onClick={(e) => { handleClose(); handleYes(e)}} >
                                Yes
                               
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <ul>
                        {printlist}
                    </ul>


                </div>
            </div>
        )
    }
}

