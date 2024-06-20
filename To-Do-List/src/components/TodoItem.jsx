import { MdDelete } from 'react-icons/md';

const TodoItem = ({
  isComplete,
  value,
  id,
  todosArr,
  setTodosArr,
  setCompleted,
  setDeleted,
  setTotalTodos,
  deleted,
}) => {
  const completeTodo = () => {
    for (let todo of todosArr) {
      if (todo.id == id) {
        todo.isComplete = !isComplete;
      }
    }
    setTodosArr([...todosArr]);
    setCompleted(todosArr.filter((todo) => todo.isComplete).length);
  };

  const deleteTodo = () => {
    const index = todosArr.findIndex((todo) => todo.id === id);
    todosArr.splice(index, 1);
    setTodosArr([...todosArr]);
    setTotalTodos(todosArr.length);
    setDeleted(deleted + 1);
  };

  return (
    <div className='todoItem'>
      <div className='content'>
        <input type='checkbox' onChange={completeTodo} />
        <p className={isComplete ? 'completed' : ''}>{value}</p>
      </div>
      <button title='Delete Item' onClick={deleteTodo}>
        <MdDelete />
      </button>
    </div>
  );
};

export default TodoItem;
