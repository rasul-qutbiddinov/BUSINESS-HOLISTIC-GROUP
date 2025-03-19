import React from "react";

const AboutIntroLoader = () => {
  return (
    <div className="py-16 px-8 bg-gray-900 text-white animate-pulse">
      {/* Logo Loader */}
      <div className="text-center mb-12">
        <div className="h-[120px] md:h-[150px] w-[120px] md:w-[150px] bg-gray-700 rounded-full mx-auto mb-4"></div>
      </div>

      {/* Content Loader */}
      <div className="max-w-[1200px] mx-auto text-left mb-20 px-4">
        <div className="h-8 w-3/4 bg-gray-600 rounded-md mb-6 md:mb-8"></div>
        <div className="h-6 w-full bg-gray-500 rounded-md mb-4"></div>
        <div className="h-6 w-2/3 bg-gray-500 rounded-md mb-4"></div>
        <div className="h-6 w-1/2 bg-gray-500 rounded-md"></div>
      </div>
    </div>
  );
};

export default AboutIntroLoader;
