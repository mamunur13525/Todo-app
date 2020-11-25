
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';


function App() {
  return (
    <>
      <div className="box">
      <TodoInput />
      <TodoList />
      </div>
    </>
  );
}

export default App;
