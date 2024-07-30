import React from "react";

const Folder = ({ folders }) => {
  console.log(folders);

  return (
    <div>
      {folders.map((item) => (
        <div>
          <p className="font-semibold">{item.name}</p>
          {item.isFolder && <Folder folders={item.folder} />}
        </div>
      ))}
    </div>
  );
};

export default Folder;
