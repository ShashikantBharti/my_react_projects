import React from 'react';

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  return (
    <div className='todoForm'>
      <form onSubmit={addTodo}>
        <input type='text' id='todoInput' placeholder='Enter todo ...' />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
