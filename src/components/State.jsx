import { useState } from "react";

const State = () => {
  let [count, setCount] = useState(0);

  console.log("Render");

  return (
    <div className="main">
      
      <div className="glow1"></div>
      <div className="glow2"></div>

      <div className="card">

        <h1 className="title">
          Hello, I am Abdullah
        </h1>

        <h2 className="heading">
          Counter App
        </h2>

        <p className="count">{count}</p>

        <div className="btns">
          <button
            className="increase"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>

          <button
            className="decrease"
            onClick={() => count > 0 && setCount(count - 1)}
          >
            Decrease
          </button>
        </div>

      </div>
    </div>
  );
};

export default State;