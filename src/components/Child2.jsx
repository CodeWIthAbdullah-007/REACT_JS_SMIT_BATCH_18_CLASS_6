import Child3 from "./Child3";

const Child2 = ({ name, isLogin }) => {
  console.log("isLogin Child 2", isLogin);

  return (
    <div>
      <h2>This is Component Child 2 {name}</h2>
      <Child3 name={name} />
    </div>
  );
};

export default Child2;