// Write a reactjs program to display the lists

import { useState } from "react";

function App() {
  const students = [ "Chris", "Max", "Neo" ];
  return (
    <ul>
      {students.map((name, index) => <li key={index}>{name}</li>)}
    </ul>
  );
}

export default App;
