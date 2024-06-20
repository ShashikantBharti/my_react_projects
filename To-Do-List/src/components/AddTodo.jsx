const AddTodo = ({ addTodo }) => {
  return (
    <div className='todoForm'>
      <form onSubmit={addTodo}>
        <input
          type='text'
          placeholder='Enter your todo...'
          name='todoInput'
          required
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
