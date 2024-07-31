import React, { useState } from "react";
import "./App.css";
import { data } from "./utils/data";
import ExplorerTitle from "./components/ExplorerTitle";
import Folder from "./components/Folder.jsx";

const App = () => {
  const [explorer, setExplorer] = useState(data);

  return (
    <div className="p-8">
      <Folder folder={explorer} />
    </div>
  );
};

export default App;
