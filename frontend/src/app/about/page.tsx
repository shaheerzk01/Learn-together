import React from "react";
import DefaultBanner from "@/components/defaultBanner";

const About = () => {
  return (
    <>
      {/* Default Banner */}
      <DefaultBanner 
        title="About Us" 
        description="Learn Together is a community-driven platform designed to help students access academic resources, collaborate with peers, and grow together. Our mission is to make education accessible and interactive for everyone." 
      />

      {/* About Content */}
      <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-md mt-10 mb-5">
        <h2 className="text-2xl font-bold mb-4 text-[#D32F2F]">Who We Are</h2>
        <p className="text-lg mb-6">
          Learn Together is a platform created with the vision of connecting students from various departments and years to share knowledge, collaborate on projects, and access valuable academic resources. Whether you're looking for study materials, project ideas, or a community to grow with, Learn Together is here to help.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#D32F2F]">Our Mission</h2>
        <p className="text-lg mb-6">
          Our mission is to create an inclusive environment where students can share and access study resources, collaborate on projects, and learn together without barriers. We aim to bridge the gap between knowledge and accessibility through community engagement and innovative tools.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#D32F2F]">What We Offer</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Easy access to academic resources like videos, notes, and assignments.</li>
          <li>Collaborative tools for project sharing and team discussions.</li>
          <li>A growing community of students from diverse academic backgrounds.</li>
          <li>Interactive features to help students learn effectively and efficiently.</li>
        </ul>
      </div>
    </>
  );
};

export default About;
