import React, { useState } from "react";
import useInput from "./hooks/useInput";

function UseForm() {

  const[firstName, bindFirstName, resetFirstName] = useInput('')
  const[lastName, bindlastName, resetlastName] = useInput('')
  
// const personOne = { Destructing  أهم مثال عن 
//     name:"obada",
//     age: 32,
//     address: {
//         city: "ds",   
//         state: "dd"
//     }
// }
// function printUser({name, age}){
//     console.log(`Name:${name} age ${age}`);
// }
// printUser(personOne)


  const handelSubmit = (e) => {
    e.preventDefault()
    alert(`${firstName} ${lastName}`);
    resetFirstName();
    resetlastName();
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <labe>FirstName</labe>
        <input
          type="text"
          {...bindFirstName}
        
        />
        <labe>LastName</labe>
        <input
          type="text"
          {...bindlastName}
        />
        <button>submit</button>
     
      </form>
    </div>
  );
}

export default UseForm;
