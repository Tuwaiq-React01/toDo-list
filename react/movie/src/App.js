import { Component } from "react";
import Info from "./Info";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
    <div className='container-fluid'>
    <h1>movieList</h1>
    <nav className='navbar sticky-top navbar-light bg-dark'>
    <h1 className='navbar-brand text-light'>Top Movies</h1>
    </nav>  
    <Info />
    </div>
    )
  }
}
export default App;