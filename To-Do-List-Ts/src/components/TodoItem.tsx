const TodoItem = () => {
  return (
    <div className='todoItem'>
      <div className='content'>
        <input type='checkbox' />
        <p>This is details</p>
      </div>
      <button>X</button>
    </div>
  );
};

export default TodoItem;
