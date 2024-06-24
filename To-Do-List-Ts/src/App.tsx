import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

interface todo {
  id: Number;
  value: String;
  isComplete: Boolean;
}

function App() {
  const [todos, setTodos] = useState<todo[]>([]);

  const addTodo = (e: SubmitEvent): void => {
    e.preventDefault();
    const todo = {
      id: Math.random(),
      value: e.target[0].value,
      isComplete: false,
    };
    setTodos([...todos, todo]);
    console.log(todos);
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList />
    </>
  );
}

export default App;
