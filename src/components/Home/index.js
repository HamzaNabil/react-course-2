import React, { useRef, useEffect, useState, useCallback } from "react";
import Child from "../Child";

// useState , useEffect , useRef , useCallback, useContext
// useReducer , useSelector, useDispatch => Redux = Context

function Home() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");

  const updateCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div>
      This is Home
      <button onClick={() => setCount(count + 1)}> +1 </button>
      {count}
      <input
        type="text"
        placeholder="Enter User"
        onChange={(e) => setUser(e.target.value)}
      />
      <Child count={count} updateCount={updateCount} />
    </div>
  );
}

export default Home;
