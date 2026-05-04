// Write a React code to display a checklist with multiple options that can select and the selected options are dynamically displayed on the screen.

import { useState } from "react";

function App() {
  const options = ["HTML", "CSS", "JavaScript", "React"];
  const [selected, setSelected] = useState([]);

  const changeOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <>
      <h2>Checklist</h2>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => changeOption(option)}
          />
          {option}
        </div>
      ))}
      <p>Selected Options: {selected.join(", ")}</p>
    </>
  );
}
