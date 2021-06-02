import React, { Component } from 'react'
import { Button, InputGroup, FormControl,Modal ,closeButton} from 'react-bootstrap';
import { FcOk } from "react-icons/fc";
import { AiOutlineCloseCircle } from "react-icons/ai";


export default class List extends Component {

    constructor(props) {
        super(props);
        this.cheek = this.cheek.bind(this);
        this.state = {
            ischeek : false,
            
        }
    }
    cheek(){
        
       this.setState({ischeek: !this.state.ischeek})
    }

   


    render() {
        const iconCheek = this.state.ischeek ? <span onClick={this.cheek} > <FcOk/></span>:<span style={{color:"red"}} onClick={this.cheek} > <AiOutlineCloseCircle/></span>

        return (
            <div>
                <li  style={{textDecoration:  this.state.ischeek ? "line-through": "none",textAlign:"left"}}>
                    {this.props.item}  
                    {iconCheek}
                </li>  
            </div>
        )
    }
}
