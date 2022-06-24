import React from "react";

const SidebarOptions = ({ Icon, title }) => {
  return (
    <div
      className="flex items-center space-x-2 m-3 md:py-2 md:px-4 p-2 hover:bg-slate-100 cursor-pointer rounded-full transition-all ease-out duration-200 max-w-fit hover:text-blue-400
      
    "
    >
      <Icon className="w-6 h-6 md:mr-2" />
      <h1 className="font-semibold hidden md:inline">{title}</h1>
    </div>
  );
};

export default SidebarOptions;
