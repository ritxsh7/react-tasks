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

  function deleteNodeHelper(tree, folderId) {
    console.log(tree);
    for (const folder of tree.folders) {
      if (folder.id === folderId) {
        return tree.folders?.filter((f) => f.id != folderId);
      }
    }
    let newNodes = [];
    newNodes = tree.folders?.map((folder) =>
      deleteNodeHelper(folder, folderId)
    );
    return {
      ...tree,
      folders: newNodes,
    };
  }

  function deleteNode(tree, folderId) {
    if (tree.id === folderId) return null;
    return deleteNodeHelper(tree, folderId);
  }

  return { insertNode, deleteNode };
};

export default useTraverseTree;
