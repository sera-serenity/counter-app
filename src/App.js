import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';

function App() {
  return (
    <div className="App">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="counter-container">
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
}

export default App;
