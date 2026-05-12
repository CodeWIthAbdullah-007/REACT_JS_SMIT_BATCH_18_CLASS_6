import { useState } from "react";
import "./App.css";
import { useCounter, STEPS } from "./compponents/State";

function App() {
  const {
    count,
    step,
    increment,
    decrement,
    reset,
    changeStep,
  } = useCounter();

  const [ops, setOps] = useState(0);
  const [isDark, setIsDark] = useState(true);

  function handleInc() {
    increment();
    setOps(ops + 1);
  }

  function handleDec() {
    decrement();
    setOps(ops + 1);
  }

  function handleReset() {
    reset();
    setOps(0);
  }

  function toggleTheme() {
    setIsDark(!isDark);
  }

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <div className="card">
        <div className="title-row">
          <h1>Counter App</h1>

          <div className="ops-badge">
            <p>{ops} ops</p>

            <button
              className="theme-toggle"
              onClick={toggleTheme}
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        <div className="number-wrap">
          <h1
            className={`number ${
              count > 0
                ? "positive"
                : count < 0
                ? "negative"
                : ""
            }`}
          >
            {count}
          </h1>

          <p className="sub">current value</p>
        </div>

        <div className="btn-row">
          <button
            className="round-btn btn-minus"
            onClick={handleDec}
          >
            -
          </button>

          <button
            className="btn-reset-round"
            onClick={handleReset}
          >
            Reset
          </button>

          <button
            className="round-btn btn-plus"
            onClick={handleInc}
          >
            +
          </button>
        </div>

        <div className="pills-wrap">
          <p>Step Size</p>

          <div className="pills">
            {STEPS.map((item) => {
              return (
                <button
                  key={item}
                  className={
                    item === step
                      ? "pill active"
                      : "pill"
                  }
                  onClick={() => changeStep(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-box">
            <span className="lbl">Value</span>
            <h2 className="val">{count}</h2>
          </div>

          <div className="stat-box">
            <span className="lbl">Step</span>
            <h2 className="val">{step}</h2>
          </div>

          <div className="stat-box">
            <span className="lbl">Ops</span>
            <h2 className="val">{ops}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;