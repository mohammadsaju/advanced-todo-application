import React, { useState } from 'react'
import Modal from './Modal';

const AddButton = () => {
  const [isTodoForm, setTodoForm] = useState(false);
  const openForm = () => {
    setTodoForm(true)
  }
  const closeForm = () => {
    setTodoForm(false)
  }
  return (
    <div>
      <button onClick={openForm} className='add-btn'>ADD TODO</button>
      {isTodoForm && <Modal closeForm={closeForm}/>}
    </div>
  )
}

export default AddButton