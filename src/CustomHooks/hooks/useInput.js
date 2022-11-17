import { useState } from "react";

function useInput(intinalValue) {
  const[value, setValue] = useState(intinalValue);

  const reset = ()=>{
    setValue(intinalValue)
  }

  const bind = {
    value: value,
    onChange: e =>{
        setValue(e.target.value)
    }

  }
  return[value, bind, reset]

}

export default useInput