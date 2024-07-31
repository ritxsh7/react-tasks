import React, { useState } from "react";
import Icon from "./Icon";
import FolderIcon from "./FolderIcon";
import ExplorerTitle from "./ExplorerTitle";

const Folder = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = (e) => {
    if (!folder.isFolder) return;
    e.stopPropagation();
    setIsOpen((open) => !open);
  };

  return (
    <div>
      <div
        className={`flex items-center gap-1 my-1 rounded-md`}
        onClick={toggleIsOpen}
      >
        {folder.isFolder && <Icon isOpen={isOpen} />}
        {folder.isRoot ? (
          <ExplorerTitle>{folder.name}</ExplorerTitle>
        ) : (
          <>
            <FolderIcon isFolder={folder.isFolder} />
            <p
              className={`${folder.isFolder ? "font-semibold" : "font-normal"}`}
            >
              {folder.name}
            </p>
          </>
        )}
      </div>

      {isOpen &&
        folder.folders?.map((item) => (
          <div className="pl-6" key={item.name}>
            <Folder folder={item} />
          </div>
        ))}
    </div>
  );
};

export default Folder;
