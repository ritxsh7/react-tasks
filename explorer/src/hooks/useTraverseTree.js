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
  return { insertNode };
};

export default useTraverseTree;
