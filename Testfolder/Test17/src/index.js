import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importing the App component
import './index.css'; // Optional, for custom global styles if needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
