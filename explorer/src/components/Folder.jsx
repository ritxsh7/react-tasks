import React, { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import FolderIcon from "./FolderIcon";
import ExplorerTitle from "./ExplorerTitle";
import { AiOutlineFileAdd } from "react-icons/ai";
import { RiFolderAddLine } from "react-icons/ri";
import Menu from "./Menu";

const Folder = ({
  folder,
  handleNewFolder,
  handleDeleteFolder,
  handleRename,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const [name, setName] = useState(folder.name);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [showInput, setShowInput] = useState({
    open: false,
    isFolder: false,
  });

  const toggleIsOpen = (folder) => {
    if (!folder.isFolder) return;
    setIsOpen((open) => !open);
  };

  const handleNewItem = (e, isFolder) => {
    setIsOpen(true);
    e.stopPropagation();
    setShowInput({
      open: true,
      isFolder,
    });
  };

  const addNewItem = (e) => {
    if (e.key === "Enter" && e.target.value) {
      handleNewFolder(folder.id, e.target.value, showInput.isFolder);
      setShowInput({
        open: false,
        isFolder: false,
      });
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setShowMenu(true);
    setPosition({ x: e.pageX, y: e.pageY });
  };

  const handleRenameItem = (e) => {
    setName(e.target.value);
  };

  const handleSetRename = (e) => {
    if (e.key === "Enter" && name) {
      handleRename(folder.id, name);
      setIsEdit(false);
    }
  };
  return (
    <div className="folder width-full max-w-[300px]">
      <div
        className={`item-name flex items-center gap-1 my-1 py-1 rounded-md cursor-default ${
          showMenu && "bg-zinc-900"
        }`}
        onClick={(e) => toggleIsOpen(folder)}
        onContextMenu={handleContextMenu}
      >
        {folder.isFolder && <Icon isOpen={isOpen} />}

        {isEdit ? (
          <input
            type="text"
            autoFocus
            value={name}
            onChange={handleRenameItem}
            onKeyDown={handleSetRename}
            onBlur={() => setIsEdit(false)}
            className="p-1"
          ></input>
        ) : folder.isRoot ? (
          <ExplorerTitle>{folder.name}</ExplorerTitle>
        ) : (
          <>
            <FolderIcon isFolder={folder.isFolder} />
            <p
              className={`text-lg ${
                folder.isFolder ? "font-semibold" : "font-normal"
              }`}
            >
              {folder.name}
            </p>
          </>
        )}

        {folder.isFolder && (
          <>
            <AiOutlineFileAdd
              color="white"
              className="text-lg ml-3"
              onClick={(e) => handleNewItem(e, false)}
            />
            <RiFolderAddLine
              color="white"
              className="text-lg "
              onClick={(e) => handleNewItem(e, true)}
            />
          </>
        )}
      </div>

      {showInput.open && (
        <div className="pl-6 flex gap-1">
          <FolderIcon isFolder={showInput.isFolder} />
          <input
            type="text"
            autoFocus
            className="rounded-sm p-1"
            onKeyDown={(e) => addNewItem(e)}
            onBlur={() => {
              setShowInput({
                open: false,
                isFolder: false,
              });
            }}
          ></input>
        </div>
      )}

      {showMenu && (
        <Menu
          position={position}
          setShowMenu={setShowMenu}
          handleNewItem={handleNewItem}
          isFolder={folder.isFolder}
          folderId={folder.id}
          handleDeleteFolder={handleDeleteFolder}
          setIsEdit={setIsEdit}
        />
      )}

      {isOpen &&
        folder.folders?.map((item) => (
          <div className="pl-6" key={item.name}>
            <Folder
              folder={item}
              handleNewFolder={handleNewFolder}
              handleDeleteFolder={handleDeleteFolder}
              handleRename={handleRename}
            />
          </div>
        ))}
    </div>
  );
};

export default Folder;
