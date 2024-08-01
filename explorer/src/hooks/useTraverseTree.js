const useTraverseTree = () => {
  function insertNode(tree, folderId, name, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.folders.unshift({
        id: new Date().getTime(),
        name,
        isFolder,
        folders: [],
      });
      return tree;
    }

    let newNodes = [];
    newNodes = tree.folders?.map((folder) => {
      return insertNode(folder, folderId, name, isFolder);
    });

    return { ...tree, folders: newNodes };
  }

  function deleteNode(tree, folderId) {
    if (tree.id === folderId) {
      return null;
    }
    if (tree.folders) {
      const newFolders = tree.folders
        .map((folder) => deleteNode(folder, folderId))
        .filter((folder) => folder !== null);

      return { ...tree, folders: newFolders };
    }
    return tree;
  }

  return { insertNode, deleteNode };
};

export default useTraverseTree;
