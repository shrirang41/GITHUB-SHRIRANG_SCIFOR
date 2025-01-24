import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          marginRight: '10px',
          cursor: 'pointer',
        }}
        onClick={increment}
      >
        Increment
      </button>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
