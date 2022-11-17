import React, { useState } from "react";

export default function HoverCounterTwo({ count, handelClick }) {
  return <div onMouseOver={() => handelClick()}>hovered {count}</div>;
}
