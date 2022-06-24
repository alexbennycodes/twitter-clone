import React from "react";

const SidebarOptions = ({ Icon, title }) => {
  return (
    <div
      className="flex items-center space-x-2 m-3 py-2 px-4  hover:bg-slate-100 cursor-pointer rounded-full transition-all ease-out duration-200 max-w-fit group
    "
    >
      <Icon className="w-6 h-6 mr-2" />
      <h1 className="font-bold group-hover:text-blue-400">{title}</h1>
    </div>
  );
};

export default SidebarOptions;
