import React from 'react'

const Banner = () => {
  return (
    <div className="w-full bg-[#F44336] relative overflow-hidden">
        {/* Title Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[50vh] text-center text-white">
          <h1 className="text-5xl font-bold">
            Learn Together <span className="text-white">Student</span> Hub
          </h1>
          <p className="mt-6 text-lg max-w-4xl px-4">
            Welcome to Learn Together, a dedicated platform designed to empower
            students by providing access to study materials, past papers, video
            lectures, and other educational resources. Explore semester-wise
            courses, share study content, and collaborate with your peers to
            achieve academic success.
          </p>
        </div>

        {/* Graffiti Section */}
        <div className="absolute bottom-0 w-full z-0">
          <svg
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <polygon
              points="0,320 120,240 240,300 360,200 480,300 600,200 720,300 840,180 960,280 1080,200 1200,320 1440,280 1440,320 0,320"
              fill="#E64A19"
            />
            <polygon
              points="0,320 60,260 180,280 300,220 420,300 540,220 660,260 780,180 900,280 1020,200 1140,280 1260,220 1440,300 1440,320 0,320"
              fill="#F57C00"
            />
            <polygon
              points="0,320 90,260 210,300 330,260 450,300 570,260 690,300 810,240 930,300 1050,260 1170,300 1290,240 1440,280 1440,320 0,320"
              fill="#FB8C00"
            />
          </svg>
        </div>
      </div>
  )
}

export default Banner