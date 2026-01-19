import { useState } from "react";
import "./Experiment1_Counter.css";

function Experiment1_Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div className="counter-container">
      <h1 className="title">Simple Counter SPA</h1>
      <h2 className="count">Count: {count}</h2>

      <div className="button-group">
        <button className="glass-btn" onClick={increment}>
          Increment
        </button>
        <button className="glass-btn danger" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Experiment1_Counter;
