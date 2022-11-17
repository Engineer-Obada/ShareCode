import React, { useState } from 'react'
import useCounter from './hooks/useCounter'

function CounterOne() {
    const[count, Incremnt, Decremnt, reset] = useCounter(0,1);
  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={Incremnt}>Incremnt</button>
        <button onClick={Decremnt}>Decremnt</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterOne