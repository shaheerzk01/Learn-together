"use client";
import React, { useState } from "react";
import DefaultBanner from "@/components/defaultBanner";
import { submitFeedback } from "@/api/feedback"; // Import the function from feedback.ts
import { FeedbackData } from "@/api/feedback";

const Feedback = () => {
  const [formData, setFormData] = useState<FeedbackData>({
    name: "",
    email: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      // Call the `submitFeedback` API function
      await submitFeedback(formData);
      setSubmitted(true); // Mark as submitted
    } catch (err: any) {
      console.error("Error submitting feedback:", err.message);
      setError(err.message); // Set error state
    }
  };

  return (
    <>
      {/* Default Banner */}
      <DefaultBanner
        title="We Value Your Feedback"
        description="Help us improve by sharing your valuable thoughts and suggestions. Your feedback is crucial in enhancing your experience with us."
      />

      {/* Feedback Form */}
      <div className="max-w-2xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-md mt-10 mb-5">
        <h2 className="text-2xl font-bold mb-6 text-[#D32F2F]">Feedback Form</h2>

        {submitted ? (
          <div className="text-center text-green-600 font-medium">
            Thank you for your feedback!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D32F2F]"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D32F2F]"
              />
            </div>

            {/* Feedback Textarea */}
            <div>
              <label
                htmlFor="feedback"
                className="block text-sm font-medium mb-2"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D32F2F]"
              />
            </div>

            {/* Error Message */}
            {error && <div className="text-red-600 text-sm">{error}</div>}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-[#D32F2F] text-white px-6 py-2 rounded font-medium hover:bg-red-700 transition"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Feedback;
