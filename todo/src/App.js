import React, { useState, useEffect } from 'react';
import './App.css';
import Tables from './Tables'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { GrAdd, GrTrash } from "react-icons/gr";
function App() {
  const [data, setData] = useState(() => [])
  let allData = data.map(dataa => <Tables all={dataa} />)

  const func = (e) => {
    e.stopPropagation()
    let newData = prompt('Please enter your data')
    setData(prev => data.concat(newData))


  }
  useEffect(() => {
    console.log("Welcome");
  }, [])
  return (
    <div className="App">
      <div className="">
        <h1>My list</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              {data.length == 0 ? <th>No Data</th> : null}
            </tr>
          </thead>
          <tbody>
            {allData}
            <GrAdd onClick={(event) => func(event)} />
            <GrTrash style={{ color: "red", marginLeft: 20 }} onClick={(event) => setData(prev => prev = [])} />
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
