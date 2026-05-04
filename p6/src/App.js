// Write a reactjs program to create a simple counter

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      Count: {count}{" "}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default App;
