import React from 'react'
import { useTodoContext } from './ContextProvider'

const ViewController = () => {
    const {state, changeView} = useTodoContext();
  return (
    <div className='view'>
        <div className='view-item'>
          <input type="radio" onChange={() => changeView('list')} checked={state.view === 'list'} />
          <p>list</p>
        </div>
        <div className='view-item'>
          <input type="radio" onChange={() => changeView('table')} checked={state.view === 'table'} />
          <p>table</p>
        </div>
    </div>
  )
}

export default ViewController