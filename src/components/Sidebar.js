import React from "react";
import { FaTwitter, FaRegUser } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";

import { FiMail, FiBookmark } from "react-icons/fi";
import { RiHome7Line, RiHashtag, RiFileList2Line,RiAddFill } from "react-icons/ri";
import SidebarOptions from "./SidebarOptions";

const Sidebar = () => {
  return (
    // <div className="py-5 border-solid border-gray-200 border-r h-screen max-w-fit pr-14">
    <div className="py-5 border-solid border-gray-200 border-r max-w-full md:col-span-4 col-span-2 lg:col-span-3 lg:pr-0 flex flex-col items-center md:items-start">
      <FaTwitter className="w-8 h-8 text-blue-400 md:ml-6 mb-8" />

      <SidebarOptions Icon={RiHome7Line} title="Home" />
      <SidebarOptions Icon={RiHashtag} title="Explore" />
      <SidebarOptions Icon={BiBell} title="Notifications" />
      <SidebarOptions Icon={FiMail} title="Messages" />
      <SidebarOptions Icon={FiBookmark} title="Bookmarks" />
      <SidebarOptions Icon={RiFileList2Line} title="Lists" />
      <SidebarOptions Icon={FaRegUser} title="Profile" />
      <SidebarOptions Icon={CgMoreO} title="More" />
      <button className="bg-blue-400 md:px-14 md:mt-5 mt-3 md:py-2 rounded-full md:ml-6 font-semibold tracking-wide text-white md:w-4/5">
        <h1 className="hidden md:inline">Tweet</h1>
        <RiAddFill className="w-8 h-8 p-1 md:hidden"/>
      </button>
    </div>
  );
};

export default Sidebar;
