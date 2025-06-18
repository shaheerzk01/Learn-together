export interface studyLinkData {
  pdfPath: any;
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
  youtubeLink?: string; // optional
  courseId: string;
  pdfFile?: File;       // optional
}
  
export const uploadMaterial = async (data: UploadMaterialData): Promise<void> => {
  try {
    const isPdf = !!data.pdfFile;

    let response;

    if (isPdf) {
      // If uploading a PDF, use FormData
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("courseId", data.courseId);
      if (data.pdfFile) {
        formData.append("pdfFile", data.pdfFile); // field name must match multer setup
      }

      response = await fetch(`http://localhost:8989/api/materials`, {
        method: "POST",
        body: formData,
      });
    } else {
      // If uploading a YouTube link, send JSON
      response = await fetch(`http://localhost:8989/api/materials`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          youtubeLink: data.youtubeLink,
          courseId: data.courseId,
        }),
      });
    }

    if (!response.ok) {
      throw new Error(`Error uploading material: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error uploading material:", error);
    throw error;
  }
};

  

