import React, { useState } from "react";
const withCounter = (WrappedComponent, incremntValue) => {
  console.log("start 3");
  function WithComponent(props) {
    const [count, setCount] = useState(0);
    const handelClick = () => {
      setCount(count + incremntValue);
      console.log(WrappedComponent);
    };
    return (
      <WrappedComponent count={count} handelClick={handelClick} {...props} />
    );
  }
  return WithComponent;
};
export default withCounter;
