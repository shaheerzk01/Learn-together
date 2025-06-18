"use client";
import DefaultBanner from "@/components/defaultBanner";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Semester = () => {
  const searchParams = useSearchParams();
  const semestersParam = searchParams.get("semesters");
  const router = useRouter();

  const semesters = semestersParam ? JSON.parse(decodeURIComponent(semestersParam)) : [];

  const handleCheckoutCourses = (semesterId: string) => {
    // Navigate to the Course page with the semesterId as a query parameter
    router.push(`/department/semester/course?semesterId=${semesterId}`);
  };

  return (
    <>
      <DefaultBanner
        title="Available Semesters"
        description="Explore the range of semesters tailored to help you achieve your academic and personal growth. Find the resources you need to succeed!"
      />
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-5">
          {semesters.length > 0 ? (
            <ul className="space-y-4">
              {semesters.map((semester: { _id: string; semesterNumber: number }, idx: number) => (
                <li
                  key={semester._id}
                  className="flex justify-between items-center gap-4 p-3 border-b last:border-none"
                >
                  <span className="text-gray-800 font-bold text-lg">
                    Semester {semester.semesterNumber}
                  </span>
                  <button
                    className="text-sm text-blue-600 hover:underline focus:outline-none"
                    onClick={() => handleCheckoutCourses(semester._id)}
                  >
                    Checkout the courses
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">No semesters available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Semester;
