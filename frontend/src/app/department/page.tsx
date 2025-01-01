import React from "react";
import DefaultBanner from "@/components/defaultBanner";
import { FaBolt, FaLaptop, FaCogs, FaBuilding, FaIndustry } from "react-icons/fa";

const Department = () => {
  const departments = [
    {
      name: "Electrical Engineering",
      icon: <FaBolt className="text-red-600" />,
      years: ["First Year", "Second Year", "Third Year", "Final Year"],
    },
    {
      name: "Software Engineering",
      icon: <FaLaptop className="text-red-600" />,
      years: ["First Year", "Second Year", "Third Year", "Final Year"],
    },
    {
      name: "Computer Science",
      icon: <FaCogs className="text-red-600" />,
      years: ["First Year", "Second Year", "Third Year", "Final Year"],
    },   
  ];

  return (
    <>
      <DefaultBanner
        title="Available Programs"
        description="Explore a wide range of departments tailored to help you achieve your academic and personal growth. Find the resources you need to succeed!"
      />
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((department, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-5">
              <div className="flex items-center gap-3 mb-4">
                {department.icon}
                <h3 className="font-bold text-lg text-gray-800">{department.name}</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {department.years.map((year, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="inline-block bg-gray-300 text-gray-800 rounded-full px-3 py-1 text-xs font-bold">
                      {idx + 1}
                    </span>
                    {year}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Department;
