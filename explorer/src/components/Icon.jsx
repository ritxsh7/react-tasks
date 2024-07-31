import React from "react";

const Icon = ({ isOpen }) => {
  return (
    <div className="text-md flex items-center mt-1">
      {isOpen ? (
        <ion-icon name="caret-down"></ion-icon>
      ) : (
        <ion-icon name="caret-forward"></ion-icon>
      )}
    </div>
  );
};

export default Icon;
