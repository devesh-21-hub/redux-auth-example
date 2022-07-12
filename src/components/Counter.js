import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  //To dispatch an action to the reducer function
  const dipatch = useDispatch();

  const toggleCounterHandler = () => {
    //While dispatching, we need to call the action handler's reducer function
    dipatch(counterActions.toggle());
  };

  const increaseHandler = () => {
    dipatch(counterActions.increase(5)); // {type: "UNIQUE_IDENTIFIER", payload: 5}
  };

  const incrementHandler = () => {
    dipatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dipatch(counterActions.decrement());
  };

  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
