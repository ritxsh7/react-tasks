import { useRef, useEffect } from "react";
import React from "react";

const Menu = ({
  position,
  setShowMenu,
  handleNewItem,
  isFolder,
  handleDeleteFolder,
  folderId,
  setIsEdit,
}) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className={`bg-zinc-900 px-3 py-2 rounded-md w-[8rem] fixed cursor-default top-[${position.x}px] left-[${position.y}px] z-50`}
    >
      {isFolder && (
        <>
          <p
            className="border-b-2 pb-2"
            onClick={(e) => {
              setShowMenu(false);
              handleNewItem(e, true);
            }}
          >
            New folder
          </p>
          <p
            className="py-2 border-b-2"
            onClick={(e) => {
              setShowMenu(false);
              handleNewItem(e, false);
            }}
          >
            New file
          </p>
        </>
      )}
      <p
        className="py-2 border-b-2"
        onClick={() => handleDeleteFolder(folderId)}
      >
        Delete
      </p>
      <p className="pt-2" onClick={() => setIsEdit(true)}>
        Rename
      </p>
    </div>
  );
};

export default Menu;
