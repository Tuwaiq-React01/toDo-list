import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import List from './Components/List';

function App() {
	return (
		<div className='App d-flex justify-content-evenly align-items-center flex-column'>
            <h1>TODO List</h1>
			<List />
		</div>
	);
}

export default App;
