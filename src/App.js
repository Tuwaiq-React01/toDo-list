import logo from './logo.svg';
import img from './check-list-list.png'
import './App.css';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css';


let itemsList = ['jogging', 'reading', 'cleaning'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <List itemsList={itemsList}/>
      </header>
    </div>
  );
}

export default App;
