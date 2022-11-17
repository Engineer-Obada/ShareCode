import React, { useState } from "react";
import withCounter from './withCounter'

 function HoverCounter({count, handelClick}) {
 
  return <div onMouseOver={() => handelClick()}> hovered {count}</div>;
}
export default withCounter(HoverCounter, 10) 
