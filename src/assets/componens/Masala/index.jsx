import React, { useState } from "react";
import "./index.css";
function App() {
  const [counterState, setCounterState] = useState(0);

  let counter = 0;

  function handleIncrement() {
    setCounterState(counterState + 1);
  }

  function handleDecrement() {
    setCounterState(counterState - 1);
  }

  return (
    <div>
      <h1>{counterState}</h1>
      <div className="btn">
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
}

export default App;
