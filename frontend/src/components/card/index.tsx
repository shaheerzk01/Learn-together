import React from "react";

const Card = () => {
  return (
    <div className="w-[250px]  text-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="p-6 bg-[#D32F2F]">
        <h2 className="text-3xl font-bold italic">Electrical</h2>
        <h3 className="text-2xl font-bold uppercase tracking-wide">Engineering</h3>
      </div>

      {/* Year Links */}
      <div className="bg-white text-red-600 py-4 px-6 rounded-b-lg space-y-4 ">
        <div className="flex items-center gap-2">
          <span className="text-xs bg-gray-200 text-gray-500 rounded px-2 py-0.5">NEW</span>
          <span className="text-lg font-medium">First Year</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-gray-200 text-gray-500 rounded px-2 py-0.5">NEW</span>
          <span className="text-lg font-medium">Second Year</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-gray-200 text-gray-500 rounded px-2 py-0.5">NEW</span>
          <span className="text-lg font-medium">Third Year</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-gray-200 text-gray-500 rounded px-2 py-0.5">NEW</span>
          <span className="text-lg font-medium">Final Year</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
