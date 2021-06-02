import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    
    render() {
        const items=this.props.items.map((item,i)=>{ return <Item item={item} key={i} index={i} remove={this.props.removeHandler}/>})
        return (
            <div id="items-list">
                {items}
            </div>
        );
    }
}

export default List;
