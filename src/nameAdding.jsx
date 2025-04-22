import { useState } from "react";

const NameAdding = () => {
  const [count, setCount] = useState(0);
  const [lastName, setLastName] = useState("");
  const handleIncrement = ()=>{
     setCount(count+1)
  }
  const handleDecrement = ()=>{
    setCount(count-1)
 }
  

  return (
    <div>
      <h1>Counter App</h1>
    <h4>Count: {count}</h4>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </div>
    
  );
};

export default NameAdding;
