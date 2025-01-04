export interface ProgramData {
  _id: string;
  name: string;
  description: string;
}

export const getPrograms = async (): Promise<ProgramData[]> => {
  try {
    const response = await fetch("http://localhost:8989/api/programs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || "Failed to fetch programs");
    }

    const result: ProgramData[] = await response.json();

    if (!Array.isArray(result)) {
      throw new Error("Invalid data format from API");
    }

    return result;
  } catch (error: any) {
    console.error("Error getting programs:", error.message);
    throw new Error(error.message || "An unknown error occurred");
  }
};
