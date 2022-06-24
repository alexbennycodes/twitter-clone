import React from "react";
import { FiSearch } from "react-icons/fi";

const Widgets = () => {
  return (
    <div className="mt-3 px-2 hidden lg:inline col-span-3">
      <div className="flex items-center space-x-2 bg-gray-200 py-2 pl-3 rounded-full">
        <FiSearch className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent flex-1 outline-none"
        />
      </div>
    </div>
  );
};

export default Widgets;
