import React, { useEffect, useLayoutEffect, useState } from "react";

const LayoutHook = () => {
  const [count, setCount] = useState(0);
  const [padding, setPadding] = useState(null);

  useLayoutEffect(() => {
    for (let i = 0; i <= 10000000; i++) {
      if (i === 10000000) {
        setPadding(Math.random() * 100);
      }
    }
  }, [count]);

  return (
    <div style={{ paddingTop: `${padding}px`, background: "blue" }}>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LayoutHook;
