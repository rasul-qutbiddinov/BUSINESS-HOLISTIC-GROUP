import React from "react";

const SuccesseLoader = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center mb-24 px-4 animate-pulse">
      {[...Array(3)].map((_, index) => (
        <div key={index}>
          <div className="h-8 w-3/4 bg-gray-500 mx-auto rounded-md mb-4"></div>
          <div className="h-6 w-1/2 bg-gray-400 mx-auto rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default SuccesseLoader;
