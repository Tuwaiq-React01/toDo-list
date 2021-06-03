import React, { Component } from 'react'
import Header from './Header'
import MyList from './MyList'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <Header />
        <MyList />
      </div>
    )
  }
}
