import React from "react";

const FolderIcon = ({ isFolder }) => {
  return (
    <div
      className={`${
        isFolder ? "text-yellow-400" : "text-sky-500"
      } flex items-center mt-1`}
    >
      {isFolder ? (
        <ion-icon name="folder"></ion-icon>
      ) : (
        <ion-icon name="document"></ion-icon>
      )}
    </div>
  );
};

export default FolderIcon;
