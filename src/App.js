import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from "./components/ToDoList";

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}

export default App;