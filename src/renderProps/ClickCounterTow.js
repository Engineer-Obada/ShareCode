import React, { Component, useState } from "react";

function ClickCounterTow({ count, handelClick }) {
  return (
    <div>
      <button onClick={handelClick}>Click {count} </button>
    </div>
  );
}

export default ClickCounterTow;
