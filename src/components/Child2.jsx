import Child3 from "./Child3";

const Child2 = ({ name }) => {
  return (
    <div>
      <h2>This is Child 2</h2>

      <h3>Hello {name}</h3>

      <Child3 name={name} />
    </div>
  );
};

export default Child2;