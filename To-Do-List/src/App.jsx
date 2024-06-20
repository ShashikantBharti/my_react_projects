import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

function App() {
  const [totalTodos, setTotalTodos] = useState(0);
  const [todosArr, setTodosArr] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [deleted, setDeleted] = useState(0);

  const addTodo = (e) => {
    e.preventDefault();
    const todoInput = e.target.todoInput;
    let todo = {
      id: Math.floor(Math.random() * 1000) + 1000,
      isComplete: false,
      value: todoInput.value,
    };
    todosArr.push(todo);
    todoInput.value = '';
    setTotalTodos(todosArr.length);
  };

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <div className='container'>
        <p>
          Total Todos : <strong>{totalTodos}</strong> | Completed :
          <strong> {completed}</strong> | Deleted : <strong>{deleted}</strong>
        </p>
        <div className='todoList'>
          {todosArr.map((todo) => (
            <TodoItem
              value={todo.value}
              key={todo.id}
              id={todo.id}
              todosArr={todosArr}
              isComplete={todo.isComplete}
              setTodosArr={setTodosArr}
              setCompleted={setCompleted}
              setDeleted={setDeleted}
              setTotalTodos={setTotalTodos}
              deleted={deleted}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
