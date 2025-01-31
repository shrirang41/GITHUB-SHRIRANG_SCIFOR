import React, { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';

const AddTodo = () => {
  const { addTask } = useContext(TodoContext);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") { // Prevent adding empty tasks
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a task" // Added placeholder
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;