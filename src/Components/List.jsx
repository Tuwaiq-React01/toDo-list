import React, { useState , useEffect } from 'react';
import Item from './Item';

const List = () => {
	const [items, setItems] = useState([]);
	const [text, setText] = useState('');

	let AddItem = (e) => {
		e.preventDefault();
		if (text) {
			setItems([...items, text]);
			setText('');
		}
	};

	let itemChange = (e) => {
		setText(e.target.value);
	};

	let removeItem = (index) => {
		items.splice(index, 1);
		setItems([...items]);
	};

    // Use Life Cycle Hook 
    useEffect(()=>{
        setItems(["Item With Use Effect" , "Use Effect"])
    },[])

	return (
		<div className='container'>
			{items.length > 0 && (
				<ul className='list-group list-group-item'>
					{items.map((item, index) => (
						<Item item={item} key={index} pos={index} remove={removeItem} />
					))}
				</ul>
			)}

			<div className='input-group'>
				<input
					type='text'
					className='form-control'
					value={text}
					onChange={(e) => {
						itemChange(e);
					}}
				/>
				<button className='btn btn-primary' onClick={(e) => AddItem(e)}>
					Add Item
				</button>
				<button className='btn btn-danger' onClick={(e) => setItems([])}>
					Clear List
				</button>
			</div>
		</div>
	);
};

export default List;
