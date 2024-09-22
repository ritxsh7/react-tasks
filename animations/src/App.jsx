import { useState } from "react";

import "./App.css";
import Slider from "./components/Slider";

function App() {
  const [slider, setSlider] = useState(false);

  return (
    <div>
      <button onClick={() => setSlider(true)}>Open slider</button>
      <Slider open={slider} />
    </div>
  );
}

export default App;
