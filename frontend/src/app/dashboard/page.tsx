import React from "react";
import Banner from "@/components/banner";
import Card from "@/components/card";

const Dashboard = () => {
  return (
    <>
      {/* Main Content */}
      <Banner />
      {/* Content Section Below the Graffiti */}
      <div className="w-full bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-2">
          {/* Welcome Box */}
          <div className="bg-white shadow-lg rounded-md p-4 mb-4">
            <h2 className="text-lg font-semibold">
              Welcome to Helper Students Support, select your department to get
              started.
            </h2>
          </div>

          {/* Cards Section */}
          <div className="flex flex-wrap lg:flex-nowrap gap-6">
            {/* Left Section (70%) */}
            <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card />
              <Card />
                <Card />
                <Card />
            </div>

            {/* Right Section (30%) */}
            <div className="w-full lg:w-[30%] bg-white shadow-md rounded-md p-4 text-center">
              <h3 className="font-bold text-xl">Get Connected for Updates</h3>
              <ul className="mt-4 text-gray-600">
                <li>Facebook</li>
                <li>WhatsApp</li>
                <li>Telegram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
