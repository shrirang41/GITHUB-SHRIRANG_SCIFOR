import React from 'react';
import Counter from './counter';
// Importing the Counter component from the same folder

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;
