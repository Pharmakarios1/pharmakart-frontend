import { useContext } from "react";
import { CounterContext } from "../Context/counterContext";

const CounterApp = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Next</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Prev</button>
    </div>
  );
};

export default CounterApp;
