import React, { useState } from 'react';
import { TodoProvider, useTodos } from './context';

const App = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};


const TodoList = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim() !== '') {
      addTodo(newTodoText);
      setNewTodoText(''); // Clear the input field
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Todo App</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new todo"
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>Add</button>
      </form>
      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};



const styles = { // Basic Styling
  container: {
    fontFamily: 'sans-serif',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flexGrow: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginRight: '10px',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #eee',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
};


export default App;