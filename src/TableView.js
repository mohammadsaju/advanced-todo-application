import React from 'react';
import { useTodoContext } from './ContextProvider';

const TableView = () => {
    const {todos, handleSelect, handleComplete} = useTodoContext();
  return (
    <div className='table-wrapper'>
        <h3>table view😜</h3>
        {
          todos.map(item => (
            <div className='todo-table' key={item.id}>
              <input type="checkbox" checked={item.isSelect} onChange={() => handleSelect(item.id)} />
              <p>{item.text}</p>
              <button className={item.isComplete ? 'active-table-btn' : 'btn-table'} onClick= {() => handleComplete(item.id) }>{item.isComplete ? 'completed' : 'running'}</button>
            </div>
          ))
        }
      </div>
  )
}

export default TableView