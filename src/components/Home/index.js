import React, { useRef, useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
// import Child from "../Child";
import Counter from "../Counter";

// useState , useEffect , useRef , useCallback, useContext
// useReducer , useSelector, useDispatch => Redux = Context

function Home() {
  // useSelector
  // const d = useSelector((state) => state);
  // console.log("all State", d);

  // const [count, setCount] = useState(0);
  // const [user, setUser] = useState("");

  // const updateCount = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // });

  return (
    <div>
      {/* <Counter /> */}
      {/* This is Home
      <button onClick={() => setCount(count + 1)}> +1 </button>
      {count}
      <input
        type="text"
        placeholder="Enter User"
        onChange={(e) => setUser(e.target.value)}
      />
      <Child count={count} updateCount={updateCount} /> */}
    </div>
  );
}

export default Home;
