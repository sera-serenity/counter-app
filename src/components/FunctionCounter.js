import React, { useState } from 'react';
import './CounterStyle.css';

function FunctionCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  const decrement = () => {
    if (count > 0) setCount(prev => prev - 1);
  };

  return (
    <div className="counter-box">
      <h2>Function Component</h2>
      <div className="number-display">{count}</div>
      <div className="btn-row">
       <button onClick={decrement}>💖 −</button>
       <button onClick={increment}>+ 💖</button>
      </div>
    </div>
  );
}

export default FunctionCounter;
