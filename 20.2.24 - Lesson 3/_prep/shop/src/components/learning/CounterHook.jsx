import useCounter from '../../hooks/useCounter';

const CounterHook = () => {
  // Use the useCounter hook to manage the counter state
  const [count, increment, decrement] = useCounter(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterHook;
