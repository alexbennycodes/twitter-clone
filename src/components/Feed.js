import React from "react";
import { TbRefresh } from "react-icons/tb";

const Feed = () => {
  return (
    <div className="lg:col-span-6 md:col-span-8 col-span-10 border-r">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold p-5">Home</h1>
        <TbRefresh className="w-8 h-8 cursor-pointer text-blue-400 mr-5 transition-all ease-out duration-500 hover:rotate-180 active:scale-125" />
      </div>
    </div>
  );
};

export default Feed;
