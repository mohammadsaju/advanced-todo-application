import './App.css';
import TableView from './TableView';
import ListView from './ListView';
import { useTodoContext } from './ContextProvider';
import SearchPanel from './SearchPanel';
import FilterController from './FilterController';
import BulkController from './BulkController';
import ViewController from './ViewController';
import AddButton from './AddButton';

const App = () => {
  const {state} = useTodoContext();

  return (
    <div className='app'>
      <AddButton/>
      <SearchPanel/>
      <FilterController/>
      <BulkController/>
      <ViewController/>
      {
        state.view === 'list' ? <ListView/> : <TableView/>
      }
    </div>
  )
}

export default App

