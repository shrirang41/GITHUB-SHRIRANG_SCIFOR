import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeContext';
import './index.css'; // Import your CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);