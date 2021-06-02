import React, { Component } from 'react'
import Main from './Main'
import './App.css';
import { Button, InputGroup, FormControl,Modal ,closeButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VscChromeClose,VscAdd } from "react-icons/vsc";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show:true,
    }
}

  render() {
    const handleClose = () => {
      this.setState({show:false})
  }

  const handleOpen = () => {
    this.setState({show:true})
}
   let maincompont = this.state.show? <Main/> : <h1>Press + to see To Do list </h1>
   let ButtonMain = this.state.show? <Button variant="outline-danger" style={{margin:"20px"}} onClick={handleClose}><VscChromeClose /></Button> 
   : <Button variant="outline-success" style={{margin:"20px"}} onClick={handleOpen}><VscAdd /></Button>

    return (
      <>
      {ButtonMain}
      <div className="App" >
      {maincompont}
      </div>
      </>
    )
  }
}
