import React from 'react';
import './App.css'
import TodoList from './Components/TodoList';
import TodoListCopy from './ComponentsCopy/TodoListCopy';


const App = () => {
  return (
    <div className="todo-app">
      {/* <TodoList /> */}
      <TodoListCopy />
    </div>
  );
};

export default App;