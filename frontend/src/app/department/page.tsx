"use client";
import React, { useState, useEffect } from "react";
import DefaultBanner from "@/components/defaultBanner";
import { FaBolt, FaLaptop, FaCogs } from "react-icons/fa";
import { getPrograms, ProgramData } from "@/api/program";
import { getSemester, SemesterData } from "@/api/semester"; // Assume `getSemester` is implemented as in earlier discussion
import { useRouter } from "next/navigation";

const Department = () => {
  const departments = [
    {
      icon: <FaBolt className="text-red-600" />,
      years: ["First Year", "Second Year", "Third Year", "Final Year"],
    },
    {
      icon: <FaLaptop className="text-red-600" />,
      years: ["First Year", "Second Year", "Third Year", "Final Year"],
    },
    {
      icon: <FaCogs className="text-red-600" />,
      years: ["First Year", "Second Year", "Third Year", "Final Year"],
    },
  ];

  const [programs, setPrograms] = useState<ProgramData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const data = await getPrograms();
        setPrograms(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  const handleYearClick = async (programId: string, year: string) => {
    try {
      // Fetch all semesters for the given program ID
      let semesters: SemesterData[] = await getSemester(programId);
  
      // Filter semesters based on the clicked year
      if (year === "First Year") {
        semesters = semesters.filter((semester) =>
          [1, 2].includes(parseInt(semester.semesterNumber))
        );
      } else if (year === "Second Year") {
        semesters = semesters.filter((semester) =>
          [3, 4].includes(parseInt(semester.semesterNumber))
        );
      } else if (year === "Third Year") {
        semesters = semesters.filter((semester) =>
          [5, 6].includes(parseInt(semester.semesterNumber))
        );
      } else if (year === "Final Year") {
        semesters = semesters.filter((semester) =>
          [7, 8].includes(parseInt(semester.semesterNumber))
        );
      }
  
      // Navigate to /semester page with filtered semesters
      router.push(
        `department/semester?programId=${programId}&semesters=${encodeURIComponent(
          JSON.stringify(semesters)
        )}`
      );
    } catch (err) {
      console.error("Error fetching semesters:", err);
    }
  };
  

  return (
    <>
      <DefaultBanner
        title="Available Programs"
        description="Explore a wide range of departments tailored to help you achieve your academic and personal growth. Find the resources you need to succeed!"
      />
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && <p>Loading programs...</p>}
          {error && <p className="text-red-600">Error: {error}</p>}
          {!loading &&
            !error &&
            programs.map((program, programIdx) => (
              <div
                key={programIdx}
                className="bg-white shadow-md rounded-lg p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  {departments[programIdx % departments.length].icon}
                  <h3 className="font-bold text-lg text-gray-800">
                    {program.name}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {departments[programIdx % departments.length].years.map(
                    (year, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => handleYearClick(program._id, year)}
                      >
                        <span className="inline-block bg-gray-300 text-gray-800 rounded-full px-3 py-1 text-xs font-bold">
                          {idx + 1}
                        </span>
                        {year}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Department;
