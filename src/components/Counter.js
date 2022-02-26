import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementByOne,
  incrementByOne,
  increment_value,
} from "../redux/actions/counterActions";
import { fetchUsers } from "../redux/actions/userActions";

function Counter() {
  const dispatch = useDispatch();
  const states = useSelector((state) => state); // {count: 0}
  console.log(states);
  useEffect(() => {
    fetchUsers(dispatch);
  }, []);

  const increment = () => incrementByOne(dispatch);
  const incrementByV = () => increment_value(dispatch);
  const decrement = () => decrementByOne(dispatch);

  return (
    <div>
      <button onClick={increment}> + 1 </button>
      <button onClick={incrementByV}> + 5 </button>
      <span> {states.counter.count} </span>

      {states.user.users.map((user) => (
        <div> {user.name} </div>
      ))}
      <button onClick={decrement}> - 1 </button>
    </div>
  );
}

export default Counter;
