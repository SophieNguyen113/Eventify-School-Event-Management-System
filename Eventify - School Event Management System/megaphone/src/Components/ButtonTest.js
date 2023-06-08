import React, { useState, useEffect } from "react";

function ButtonTest(props) {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState({ color: "red" });
  useEffect(() => {
    if (count % 2 === 1) {
      // even
      setColor({ color: "blue" });
    } else {
      // odd
      setColor({ color: "red" });
    }
  }, [count]);
  return (
    <div>
      <span style={color}>Test</span>
      <p>
        The buttton value is {props.name} {count}
      </p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ButtonTest;
