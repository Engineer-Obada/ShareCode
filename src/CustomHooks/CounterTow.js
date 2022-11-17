import React, { useState } from 'react'
import useCounter from './hooks/useCounter';

function CounterTow() {
    const[count, Incremnt, Decremnt, reset] = useCounter(10,10);
  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={Incremnt}>Incremnt</button>
        <button onClick={Decremnt}>Decremnt</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterTow