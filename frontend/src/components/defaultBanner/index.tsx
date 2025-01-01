import React from 'react'

interface DefaultBannerProps {
    title: string
    description: string
}

const DefaultBanner = ({title, description}: DefaultBannerProps) => {
  return (
    <div className="w-full bg-white relative overflow-hidden">
        {/* Title Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[40vh] text-center text-black">
          <h1 className="text-5xl font-normal">
            {title}
          </h1>
          <p className="mt-6 text-lg max-w-4xl px-4">
            {description}
          </p>
        </div>
      </div>
  )
}

export default DefaultBanner