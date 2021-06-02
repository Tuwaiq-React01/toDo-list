import logo from './logo.svg';
import './App.css';
import TodoList from './pages/TodoList';
import { Container, Row } from 'reactstrap';

function App() {
  return (
    <Container>
      <Row>
        <TodoList />
      </Row>
    </Container>
  );
}

export default App;
