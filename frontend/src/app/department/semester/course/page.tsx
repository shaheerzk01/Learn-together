"use client";
import DefaultBanner from "@/components/defaultBanner";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getCourse, CourseData } from "@/api/course";

const Course = () => {
  const searchParams = useSearchParams();
  const semesterId = searchParams.get("semesterId");

  const [courses, setCourses] = useState<CourseData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCourses = async () => {
      if (!semesterId) return;

      try {
        setLoading(true);
        const data = await getCourse(semesterId);
        setCourses(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [semesterId]);

  const handleViewMaterials = (courseId: string) => {
    // Route to the StudyLinks page with courseId as a query parameter
    router.push(`/department/semester/course/links?courseId=${courseId}`);
  };

  return (
    <>
      <DefaultBanner
        title="Available Courses"
        description="Explore the courses offered in this semester."
      />
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-5">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {!loading && !error && courses.length > 0 ? (
            <ul className="space-y-4">
              {courses.map((course) => (
                <li
                  key={course._id}
                  className="p-3 border-b last:border-none flex flex-col gap-2"
                >
                  <span className="font-bold text-gray-800">
                    {course.courseName} ({course.courseCode})
                  </span>
                  <span className="text-sm text-gray-600">
                    Credit Hours: {course.creditHours}
                  </span>
                  <button
                    className="text-sm text-blue-600 hover:underline focus:outline-none mt-2"
                    onClick={() => handleViewMaterials(course._id)}
                  >
                    View Study Materials
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">No courses available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Course;
