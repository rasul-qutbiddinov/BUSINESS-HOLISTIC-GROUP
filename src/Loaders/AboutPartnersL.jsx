import React from "react";

const PartnerLoader = () => {
  return (
    <section className="max-w-[1200px] mx-auto text-center px-4 mb-10 animate-pulse">
      {/* Title Loader */}
      <div className="h-6 w-1/4 bg-gray-500 mx-auto rounded-md mb-2"></div>
      <div className="h-8 w-3/4 bg-gray-600 mx-auto rounded-md mb-8"></div>

      {/* Grid Loader */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-xl p-4 shadow-lg h-20 md:h-24"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default PartnerLoader;
