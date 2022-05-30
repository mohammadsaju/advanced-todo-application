import React from 'react';
import { useTodoContext } from './ContextProvider';

const FilterController = () => {
    const {state, handleFilter} = useTodoContext();
  return (
    <div className='btn-group'>
        <button className={state.filter === 'all' ? 'active-btn' : 'btn'} onClick={() => handleFilter('all')}>all</button>
        <button className={state.filter === 'running' ? 'active-btn' : 'btn'} onClick={() => handleFilter('running')}>running</button>
        <button className={state.filter === 'completed' ? 'active-btn' : 'btn'} onClick={() => handleFilter('completed')}>completed</button>
    </div>
  )
}

export default FilterController;