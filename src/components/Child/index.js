import React, { memo } from "react";

function Child(props) {
  console.log("child render");
  return (
    <div>
      Child {props.count}
      <button onClick={props.updateCount}> +1</button>
    </div>
  );
}

export default memo(Child);
