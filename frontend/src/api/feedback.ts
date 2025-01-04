export interface FeedbackData {
  name: string;
  email: string;
  feedback: string;
}

export interface ApiResponse {
  message: string;
  error?: string;
}

export const submitFeedback = async (
  data: FeedbackData
): Promise<ApiResponse> => {
  try {
    const response = await fetch("http://localhost:8989/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Something went wrong");
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Error submitting feedback:", error.message);
    throw new Error(error.message);
  }
};
