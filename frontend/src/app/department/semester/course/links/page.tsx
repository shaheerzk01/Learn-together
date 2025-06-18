"use client";
import DefaultBanner from "@/components/defaultBanner";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getStudyLinks, studyLinkData } from "@/api/studyLinks";
import { uploadMaterial, UploadMaterialData } from "@/api/studyLinks";

const StudyLinks = () => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");

  const [studyLinks, setStudyLinks] = useState<studyLinkData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<UploadMaterialData>({
    title: "",
    description: "",
    youtubeLink: "",
    courseId: courseId || "", // Set courseId from URL
  });

  useEffect(() => {
    const fetchStudyLinks = async () => {
      if (!courseId) return;

      try {
        setLoading(true);
        const materials = await getStudyLinks(courseId);
        setStudyLinks(materials);
      } catch (err: any) {
        setError(err.message || "Failed to fetch study materials");
      } finally {
        setLoading(false);
      }
    };

    fetchStudyLinks();
  }, [courseId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = async () => {
    try {
      if (!formData.title || !formData.youtubeLink || !formData.description) {
        alert("All fields are required!");
        return;
      }

      await uploadMaterial(formData);
      setIsModalOpen(false);
      setFormData({
        title: "",
        description: "",
        youtubeLink: "",
        courseId: courseId || "",
      });

      // Refresh the study materials list
      const updatedMaterials = await getStudyLinks(courseId!);
      setStudyLinks(updatedMaterials);
    } catch (err) {
      console.error("Failed to upload material:", err);
      alert("Failed to upload material.");
    }
  };

  return (
    <>
      <DefaultBanner
        title="Study Materials"
        description="Browse and upload study materials for this course."
      />
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-5">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-700"
          >
            Upload Material
          </button>

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-600">{error}</p>}

          {!loading && !error && studyLinks.length > 0 ? (
            <ul className="space-y-4">
              {studyLinks.map((link) => (
                <li
                  key={link._id}
                  className="p-3 border-b last:border-none flex flex-col gap-2"
                >
                  <span className="font-bold text-gray-800">{link.title}</span>
                  <p className="text-sm text-gray-600">{link.description}</p>
                  <a
                    href={link.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Watch on YouTube
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">
              No study materials available.
            </p>
          )}
        </div>
      </div>

      {/* Modal for Uploading Study Material */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-lg font-bold mb-4">Upload Study Material</h2>

            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />

            <input
              type="text"
              name="youtubeLink"
              placeholder="YouTube Link"
              value={formData.youtubeLink}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />

            <div className="flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudyLinks;
