import React from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa"; // Icons for navigation
import { MdFeedback } from "react-icons/md"; // Feedback icon
import { BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <header className="w-full bg-[#D32F2F] h-16 flex items-center px-4 text-white justify-center ">
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-xl">
        <BiUser className="text-white text-2xl" />
        <span>Learn Together</span>
      </div>

      {/* Navigation Links */}
      <nav className="ml-8 flex items-center gap-6 text-sm font-medium">
        <a href="/" className="flex items-center gap-1 hover:underline">
          <FaHome />
          Home
        </a>
        <a href="/departments" className="flex items-center gap-1 hover:underline">
          <FaInfoCircle />
          Departments
        </a>
        <a
          href="/about-helper"
          className="flex items-center gap-1 hover:underline"
        >
          About Helper
        </a>
        <a href="/departments" className="flex items-center gap-1 hover:underline">
          <MdFeedback />
          Feedback
        </a>
      </nav>
    </header>
  );
};

export default Header;
