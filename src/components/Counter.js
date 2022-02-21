import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state); // {count: 0}

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return (
    <div>
      <button onClick={increment}> + 1 </button>
      <span> {count} </span>
      <button onClick={decrement}> - 1 </button>
    </div>
  );
}

export default Counter;
