import React, {useState} from 'react';
import style from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button className={style.btn} onClick={increment}>Increment</button>
            <button className={style.btn} onClick={decrement}>Decrement</button>
            <h1>{count}</h1>
        </div>
    );
};
