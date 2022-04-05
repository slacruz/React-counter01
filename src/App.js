import React, {useCallback, useEffect, useState} from "react";
import "./style.css";

const Counter = ({counter, increment}) => {
  useEffect(()=>{
    console.log("new increment")
  }, [increment])
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increment}>sumar</button>
    </div>
  );
}
export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() =>{
    setCounter(prevcounter => prevcounter + 1)
  },[])
  return (
    <Counter counter={counter} increment={increment} />
  );
}
