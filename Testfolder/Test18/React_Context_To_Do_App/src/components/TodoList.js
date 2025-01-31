import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const TodoList = () => {
  const { tasks, removeTask } = useContext(TodoContext);

  return (
    <ul>
      {tasks.map((task, index) => ( // Added index as key for React lists
        <li key={index}> {/* Use a unique key (index is okay for this simple example) */}
          {task}
          <button onClick={() => removeTask(task)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;