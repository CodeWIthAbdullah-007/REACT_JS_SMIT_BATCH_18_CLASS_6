// import React from "react";
// import Home from "./components/Home";
// import Card1 from "./components/Card1";
// import users from "./assets/data/userData";
// import './index.css'
// import CustomInput from "./components/shared/CustomInput";
// import CompoC from "./components/Child3";
// import State from './components/State';
import Child1 from './components/Child1';
import Parent from './components/Parent';


const App = () => {
  

  return (
    // <CompoC userName={userName} />
    <div>
      <Parent name={name} />
    </div>
  );
};

export default App;
