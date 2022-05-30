import React, { useState } from 'react'
import { useTodoContext } from './ContextProvider';

const Modal = ({closeForm}) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const {addTodo} = useTodoContext();
  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo({text, description})
    closeForm();
  }

  return (
    <div className='todo-form-overlay'>
      <div className='todo-form-container'>
        <h4>Add Todo</h4>
        <form>
          <input type="text" value={text} onChange={(e) => setText(e.target.value) } placeholder='title...'/>
          <textarea rows="3" value={description} onChange={(e) => setDescription(e.target.value) } placeholder='description...'></textarea>
          <button onClick={handleAddTodo}>Add todo</button>
          <button onClick={closeForm} className='close'>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default Modal