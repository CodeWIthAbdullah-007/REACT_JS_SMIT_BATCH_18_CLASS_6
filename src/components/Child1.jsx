import Child2 from "./Child2";
import { useEffect } from "react";

const Child1 = ({ name, isLogin, setIsLogin }) => {
  console.log("name", name);

  useEffect(() => {
    if (!isLogin) {
      setIsLogin(true);
    }
  }, [isLogin, setIsLogin]);

  return (
    <div>
      <h2>This is Component Child 1 {name}</h2>
      <Child2 name={name} isLogin={isLogin} />
    </div>
  );
};

export default Child1;