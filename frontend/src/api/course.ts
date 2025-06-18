export interface CourseData {
  _id: string;
  courseName: string;
  courseCode: string;
  creditHours: string;
}

export const getCourse = async (semesterId: string): Promise<CourseData[]> => {
  try {
    const response = await fetch(
      `http://localhost:8989/api/courses/${semesterId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || "Failed to fetch programs");
    }
    const result: CourseData[] = await response.json();

    if (!Array.isArray(result)) {
      throw new Error("Invalid data format from API");
    }

    return result;
  } catch (error: any) {
    console.error("Error getting programs:", error.message);
    throw new Error(error.message || "An unknown error occurred");
  }
};
