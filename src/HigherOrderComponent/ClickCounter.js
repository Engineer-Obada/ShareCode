import React, { useState } from "react";
import withCounter from './withCounter'

function ClickCounter ({count, handelClick, name}) {
  console.log("start 2");
  return <div>
    <button onClick={()=>handelClick()}> {name}Click {count} times</button>
  </div>;
}
export default withCounter(ClickCounter, 5) 
