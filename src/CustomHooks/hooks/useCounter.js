import { useState } from "react";

function useCounter(initiaValue = 0, value) {
    const[count, setCount] = useState(initiaValue);

    const Incremnt = ()=>{
        setCount(prev => prev + value)
    }

    const Decremnt = ()=>{
        setCount(prev => prev  - value)
    }

    const reset = ()=>{
        setCount(initiaValue)
    }
    return [count, Incremnt, Decremnt, reset];
}

export default useCounter