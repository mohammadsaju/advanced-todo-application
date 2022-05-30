import React from 'react'
import { useTodoContext } from './ContextProvider'

const SearchPanel = () => {
    const {state, handleChange}= useTodoContext();
  return (
    <div>
      <input className='search' type="text" placeholder='🔍search....' value={state.searchTerm} onChange={handleChange} />
      </div>
  )
}

export default SearchPanel