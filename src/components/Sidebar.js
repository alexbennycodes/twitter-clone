import React from "react";
import { FaTwitter, FaRegUser } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";
import { FiMail, FiBookmark } from "react-icons/fi";
import { RiHome7Fill, RiHashtag, RiFileList2Line } from "react-icons/ri";
import SidebarOptions from "./SidebarOptions";

const Sidebar = () => {
  return (
    <div className="py-5 border-solid border-gray-200 border-r h-screen max-w-fit pr-14">
      <FaTwitter className="w-8 h-8 text-blue-400 ml-6 mb-8" />

      <SidebarOptions Icon={RiHome7Fill} title="Home" />
      <SidebarOptions Icon={RiHashtag} title="Explore" />
      <SidebarOptions Icon={BiBell} title="Notifications" />
      <SidebarOptions Icon={FiMail} title="Messages" />
      <SidebarOptions Icon={FiBookmark} title="Bookmarks" />
      <SidebarOptions Icon={RiFileList2Line} title="Lists" />
      <SidebarOptions Icon={FaRegUser} title="Profile" />
      <SidebarOptions Icon={CgMoreO} title="More" />
      <button className="bg-blue-400 px-16 mt-5 py-2 rounded-full ml-6 font-bold text-white">
        Tweet
      </button>
    </div>
  );
};

export default Sidebar;
