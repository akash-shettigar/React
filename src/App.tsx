import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>

      <div className="count-button">
        <button onClick={handleIncrease}>
          Increase
        </button>
        <button onClick={handleDecrease}>
          Decrease
        </button>
        <button disabled= {count === 0} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;