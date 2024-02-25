import React from 'react'
import useCounter from '../../hooks/useCounter';

const CounterHook = () => {
    const {count, increment, decrement} = useCounter();
    // const [myCounter, addOne] = useCounter();

    return (
        <div>
            <div>Counter: {count}</div>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={() => decrement()}>Decrement</button>
            </div>
        </div>
    )
}

export default CounterHook;

