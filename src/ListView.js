import React from 'react'
import { useTodoContext } from './ContextProvider';

const ListView = () => {
    const {todos, handleSelect, handleComplete} = useTodoContext();
  return (
    <div className='list-wrapper'>
        <h3>list view😎</h3>
        {
          todos.map(item => (
            <div className='todo-list' key={item.id}>
              <input type="checkbox" checked={item.isSelect} onChange={() => handleSelect(item.id)} />
              <p>{item.text}</p>
              <button className={item.isComplete === true ? 'active-btn' : 'btn'} onClick= {() => handleComplete(item.id) }>{item.isComplete ? 'completed' : 'running'}</button>
            </div>
          ))
        }
      </div>
  )
}

export default ListView