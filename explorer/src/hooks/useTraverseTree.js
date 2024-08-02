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

  function renameNode(tree, folderId, name) {
    if (tree.id === folderId) {
      tree.name = name;
      return tree;
    }

    let newTree = [];

    if (tree.folders) {
      newTree = tree.folders.map((folder) =>
        renameNode(folder, folderId, name)
      );
      return {
        ...tree,
        folders: newTree,
      };
    }

    return tree;
  }

  return { insertNode, deleteNode, renameNode };
};

export default useTraverseTree;
