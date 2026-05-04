// Creating an accordion that toggles text content on click of the accordion header using React State and conditional rendering

import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h2 onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }}>
        Click to Toggle
      </h2>
      {open && <p>This is the hidden accordion content</p>}
    </>
  );
}

export default App;
