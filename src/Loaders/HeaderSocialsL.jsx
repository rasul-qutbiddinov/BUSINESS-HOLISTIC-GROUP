import React from "react";

const SocialMediaLoader = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="relative w-[80%] mx-auto bg-[#04344F] py-3 mt-20 mb-0 rounded-full overflow-hidden animate-pulse">
        {/* Chapga o'tish tugmasi loader */}
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
          <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
        </div>

        {/* O‘ngga o'tish tugmasi loader */}
        <div className="absolute -right-7 top-1/2 transform -translate-y-1/2 z-10">
          <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
        </div>

        {/* Social media scroll loader */}
        <div className="flex items-center justify-start space-x-6 px-12 mx-auto overflow-hidden">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-6 w-24 bg-gray-400 rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLoader;
