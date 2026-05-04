// Create an image slide, where users can view multiple images with next/previous buttons using reactjs

import { useState } from "react";
import img1 from "./img1.png";
import img2 from "./img2.jpg";

function App() {
  const images = [img1, img2];
  const [index, setIndex] = useState(0);

  // Here 2 is the images array length

  const nextImage = () => {
    setIndex((index) => (index + 1) % 2);
  };

  const prevImage = () => {
    setIndex((index) => (index - 1 + 2) % 2);
  };

  return (
    <>
      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
      <div>
        <img src={images[index]} />
      </div>
    </>
  );
}

export default App;
