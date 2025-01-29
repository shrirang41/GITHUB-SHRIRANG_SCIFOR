import React from 'react';
import ThemeToggler from './components/ThemeToggler';
import { useTheme } from './ThemeContext';

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Context API Theme Toggle</h1>
      <p>This is some text that will change theme.</p>
      <ThemeToggler />
    </div>
  );
};

export default App;