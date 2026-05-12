import { useState } from "react";

export const STEPS = [1, 5, 10, 25, 100];

export function useCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function increment() {
    setCount(count + step);
  }

  function decrement() {
    setCount(count - step);
  }

  function reset() {
    setCount(0);
  }

  function changeStep(value) {
    setStep(value);
  }

  return {
    count,
    step,
    increment,
    decrement,
    reset,
    changeStep,
  };
}