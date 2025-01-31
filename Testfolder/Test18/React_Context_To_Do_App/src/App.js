import React from 'react';
import { TodoProvider } from './context/TodoContext'; // Import the Provider
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <TodoProvider> {/* Wrap your app with the Provider */}
      <div className="app-container"> {/* Added a container for styling */}
        <h1>To-Do List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;