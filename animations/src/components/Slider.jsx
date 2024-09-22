import React from "react";

const Slider = ({ open }) => {
  return (
    <div
      className={`${
        open ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out bg-blue-700`}
    >
      Slider
    </div>
  );
};

export default Slider;
