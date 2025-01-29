export interface studyLinkData {
  _id: string;
  title: string;
  youtubeLink: string;
  description: string;
}

export const getStudyLinks = async (
  courseId: string
): Promise<studyLinkData[]> => {
  try {
    const response = await fetch(
      `http://localhost:8989/api/get-materials/${courseId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching study links: ${response.statusText}`);
    }

    const data: studyLinkData[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching study links:", error);
    throw error;
  }
};

export interface UploadMaterialData {
    title: string;
    description: string;
    youtubeLink: string;
    courseId: string;
  }
  
  export const uploadMaterial = async (data: UploadMaterialData): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:8989/api/materials`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error uploading material: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error uploading material:", error);
      throw error;
    }
  };
  

