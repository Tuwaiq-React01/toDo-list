import './App.css';
import Todo from './components/Todo';

function App() {

  const list = ['shopping' , 'gym' , 'reading a book'];

  return (
    <div className="container">

     <Todo list={list}/>
    </div>
  );
}

export default App;
