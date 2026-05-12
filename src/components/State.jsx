import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [numberColor, setNumberColor] = useState("white"); 

  const increment = () => {
    setCount(count + 1);
    setNumberColor("#00ff88"); 
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setNumberColor("#ff0088"); 
    }
  };

  return (
    <div className="main">
      <div className="glow1"></div>
      <div className="glow2"></div>

      <div className="card">
        <h1 className="title">Hello, I am Abdullah</h1>
        <h2 className="heading">Counter App</h2>

        <div className={`count ${numberColor}`}>
          <span>{count}</span>
        </div>

        <div className="btns">
          <button className="increase" onClick={increment}>
            + Increase
          </button>
          <button 
            className="decrease"
            disabled={count === 0}
            onClick={decrement}
          >
            - Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;