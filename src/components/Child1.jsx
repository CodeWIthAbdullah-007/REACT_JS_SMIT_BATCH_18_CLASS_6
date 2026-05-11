import Child2 from "./Child2";

const Child1 = ({ name }) => {
  return (
    <div>
      <h2>This is Child 1</h2>

      <h3>Hello {name}</h3>

      <Child2 name={name} />
    </div>
  );
};

export default Child1;