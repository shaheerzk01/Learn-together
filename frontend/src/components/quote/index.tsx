import React from "react";

const Quote = () => {
  return (
    <div className="relative w-96 h-96 bg-center text-white font-sans p-5">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url('/bg1.jpg')` }}
      ></div>
      <div className="absolute top-5 left-5 text-6xl font-bold text-red-500 z-10">
        “
      </div>

      <div className="relative mt-16  text-lg leading-relaxed z-10 text-gray-200 font-bold">
        "Education is the most powerful weapon which you can use to change the
        world."
      </div>

      <div className="relative mt-2 text-lg leading-relaxed z-10 text-gray-200 font-bold">
        — Nelson Mandela
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded text-md font-normal z-10">
        #HelperStudent
      </div>
    </div>
  );
};

export default Quote;
