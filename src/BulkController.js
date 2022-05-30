import React from 'react'
import { useTodoContext } from './ContextProvider'

const BulkController = () => {
    const {clearCompleted, clearSelected, handleReset} = useTodoContext();
  return (
    <div className='btn-group'>
        <button className='btn' onClick={clearSelected}>clear slected</button>
        <button className='btn' onClick={clearCompleted}>clear completed</button>
        <button className='btn' onClick={handleReset}>reset</button>
    </div>
  )
}

export default BulkController