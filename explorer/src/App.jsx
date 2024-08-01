import React, { useState } from "react";
import "./App.css";
import { data } from "./utils/data";
import Folder from "./components/Folder.jsx";
import useTraverseTree from "./hooks/useTraverseTree.js";

const App = () => {
  const [explorer, setExplorer] = useState(data);

  const { insertNode, deleteNode } = useTraverseTree();

  const handleNewFolder = (folderId, name, isFolder) => {
    const newTree = insertNode(explorer, folderId, name, isFolder);
    setExplorer(newTree);
  };

  const handleDeleteFolder = (folderId) => {
    const newTree = deleteNode(explorer, folderId);
    setExplorer(newTree);
  };

  return (
    <div className="p-8">
      <Folder
        folder={explorer}
        handleNewFolder={handleNewFolder}
        handleDeleteFolder={handleDeleteFolder}
      />
    </div>
  );
};

export default App;
