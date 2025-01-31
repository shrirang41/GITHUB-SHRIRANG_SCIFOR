import React, { createContext, useState } from "react";

const TodoContext = createContext({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
});

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const removeTask = (taskToRemove) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToRemove));
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
