import { useState } from "react";
import data from './data.json';
import shortid from "shortid";


const useTodo = () => {
    const [state, setState] = useState({todos: [...data], searchTerm: '', filter: 'all', view: 'list'});

    const addTodo = (data) => {
      const todo = {
        id: shortid(),
        text: data.text,
        description: data.description,
        time: new Date(),
        isComplete: false,
        isSelect: false
      }
      if(data.text) {
        return setState({...state, todos: [...state.todos, todo]})
      }
    }
    const handleChange = (e) => {
        setState({...state, searchTerm: e.target.value})
      }
      const performSearch = () => {
        return state.todos.filter(item => {
          return item.text.toLowerCase().includes(state.searchTerm.toLowerCase())
        })
      }
      const handleFilter = (text) => {
        setState({...state, filter: text});
      }
      const performFilter = (todos) => {
        const {filter} = state;
        if(filter === 'running') {
          return todos.filter(item => !item.isComplete)
        } else if (filter === 'completed') {
          return todos.filter(item => item.isComplete)
        } else {
          return todos;
        }
      }
      let todos = performSearch();
      todos = performFilter(todos);

      const handleComplete = (todoId) => {
        const todo = state.todos.find(item => item.id === todoId);
        todo.isComplete = !todo.isComplete
        return setState({...state})
      }
      const handleSelect = (todoId) => {
        const todo = state.todos.find(item => item.id === todoId);
        todo.isSelect = !todo.isSelect
        return setState({...state})
      }
    
      const clearSelected  = () => {
        const todos = state.todos.filter(item => !item.isSelect)
        return setState({...state, todos: [...todos]})
      }
      const clearCompleted  = () => {
        const todos = state.todos.filter(item => !item.isComplete)
        return setState({...state, todos: [...todos]})
      }
      const handleReset  = () => {
        return setState({...state, filter: 'all', searchTerm: '', view: 'list'})
      }
    
      const changeView = (text) => {
        return setState({...state, view: text})
      }

    return {
        todos,
        state,
        addTodo,
        handleChange,
        handleFilter,
        handleComplete,
        handleSelect,
        clearSelected,
        clearCompleted,
        handleReset,
        changeView
    }
}

export default useTodo;