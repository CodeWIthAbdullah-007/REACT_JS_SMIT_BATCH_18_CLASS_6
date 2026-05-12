import Child1 from "./Child1";
import { useState } from "react";

const Parent = () => {
  let [name] = useState("Abdullah Anwar");
  let [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Child1 name={name} isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
};

export default Parent;