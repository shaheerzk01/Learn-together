import React from "react";
import { FaHome, FaInfoCircle, FaDollarSign } from "react-icons/fa"; // Icons for navigation
import { RiMiniProgramFill } from "react-icons/ri";
import { MdFeedback } from "react-icons/md"; // Feedback icon
import { BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-[#D32F2F] h-16 flex items-center px-4 text-white justify-center shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-xl">
        <BiUser className="text-white text-2xl" />
        <span>Learn Together</span>
      </div>

      {/* Navigation Links */}
      <nav className="ml-8 flex items-center gap-6 text-sm font-medium">
        <a href="/dashboard" className="flex items-center gap-1 hover:underline">
          <FaHome />
          Home
        </a>
        <a href="/department" className="flex items-center gap-1 hover:underline">
          <RiMiniProgramFill />
          Programs
        </a>
        <a href="/about" className="flex items-center gap-1 hover:underline">
          <FaInfoCircle />
          About
        </a>
        <a href="/feedback" className="flex items-center gap-1 hover:underline">
          <MdFeedback />
          Feedback
        </a>
        <a href="/pricing" className="flex items-center gap-1 hover:underline">
          <FaDollarSign />
          Pricing
        </a>
      </nav>
    </header>
  );
};

export default Header;
