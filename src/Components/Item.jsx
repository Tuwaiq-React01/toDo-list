import React from 'react';

const Item = ({ item, pos, remove }) => {
	return (
		<>
			<li className='list-group-item d-flex justify-content-between align-items-center'>
				{item}
				<button className='btn btn-danger ' onClick={() => remove(pos)}>
					-
				</button>
			</li>
		</>
	);
};

export default Item;
