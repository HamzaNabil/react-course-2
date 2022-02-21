import React, { useState, useEffect } from "react";

function Counter2() {
  const [count, setCount] = useState(5);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("counttttt");
  });

  let handleClick = () => {};

  return (
    <div>
      <button onClick={() => setUsers([...users, { id: 1, name: "hamza" }])}>
        Add User
      </button>
      <p onClick={handleClick}> {count} </p>
      <button onClick={() => setCount(count - 1)}> Dcrement</button>
      <button onClick={() => setCount(count + 5)}>Increment By 5</button>
    </div>
  );
}

export default Counter2;
