import React from "react";
import Parent from "./components/Parent";

const App = () => {
  const name = "Abdullah";

  return (
    <div>
      <Parent name={name} />
    </div>
  );
};

export default App;