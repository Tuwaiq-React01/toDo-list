import React, { useState } from 'react';
const Tables = (props) => {
    return (
        <>
            <tr>
                {/* <td>{data.length}</td> */}
                <td>{props.all}</td>
            </tr>
        </>
    );
}

export default Tables;