export interface SemesterData {
    _id: string;
    semesterNumber: string;
  }
  
  export const getSemester = async (programId: string): Promise<SemesterData[]> => {
    try {
      const response = await fetch(`http://localhost:8989/api/semesters/${programId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching semesters: ${response.statusText}`);
      }
  
      const data: SemesterData[] = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching semesters:", error);
      throw error;
    }
  };
  