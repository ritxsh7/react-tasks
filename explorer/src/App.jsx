import React from "react";
import "./App.css";
import { explorer } from "./utils/data";
import ExplorerTitle from "./components/ExplorerTitle";
import Folder from "./components/Folder.jsx";

const App = () => {
  return (
    <div className="p-8">
      <ExplorerTitle>{explorer.name}</ExplorerTitle>
      <Folder folders={explorer.folders} />
    </div>
  );
};

export default App;
