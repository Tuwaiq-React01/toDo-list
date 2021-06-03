import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const itmes = this.props.lsA==null?console.log("hh"):this.props.lsA.map((item, index) => 
            <li key={index}>
                {item}
            </li>
            
        )
        
        return (
         <div>
             <ul>
                 {itmes}
             </ul>

        </div>
            
        )
        
    }
}
