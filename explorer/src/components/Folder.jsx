import React, { useState } from "react";
import Icon from "./Icon";
import FolderIcon from "./FolderIcon";
import ExplorerTitle from "./ExplorerTitle";
import { AiOutlineFileAdd } from "react-icons/ai";
import { RiFolderAddLine } from "react-icons/ri";

const Folder = ({ folder, handleNewFolder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = (folder) => {
    if (!folder.isFolder) return;
    setIsOpen((open) => !open);
  };

  const [showInput, setShowInput] = useState({
    open: false,
    isFolder: false,
  });

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

  return (
    <div>
      <div
        className={`flex items-center gap-1 my-1 rounded-md`}
        onClick={(e) => toggleIsOpen(folder)}
      >
        {folder.isFolder && <Icon isOpen={isOpen} />}

        {folder.isRoot ? (
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
      {isOpen &&
        folder.folders?.map((item) => (
          <div className="pl-6" key={item.name}>
            <Folder folder={item} handleNewFolder={handleNewFolder} />
          </div>
        ))}
    </div>
  );
};

export default Folder;
