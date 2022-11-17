import React, { useState } from "react";

export default function Counter({render}) {
  const [count, setCount] = useState(0);
  const handelClick = () => {
    setCount(count + 1);
  };
  return <div>
    {
    render(count, handelClick)
    }
    </div>;
}