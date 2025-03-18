const AboutCardLoader = () => {
  return (
    <section className="px-4 md:px-8 py-12 bg-white flex flex-col items-center justify-center gap-10 relative max-w-[1920px] mx-auto animate-pulse">
      <div className="grid grid-flow-col grid-rows-3 gap-6 relative z-10 w-full max-w-6xl">
        {/* Image 1 - bottom left */}
        <div className="row-span-2 row-end-3 hidden sm:inline-block relative">
          <div className="w-full max-w-md h-60 bg-gray-300 rounded-2xl shadow-lg"></div>
        </div>

        {/* Image 2 - top right */}
        <div className="row-span-2 row-start-2 hidden sm:inline-block relative">
          <div className="w-full max-w-md h-60 bg-gray-300 rounded-2xl shadow-lg"></div>
        </div>

        {/* Text Section - right side */}
        <div className="row-start-1 row-end-4 flex flex-col justify-center text-left space-y-4">
          <div className="h-6 w-32 bg-teal-500 rounded-md"></div>
          <div className="h-10 w-3/4 bg-gray-400 rounded-md"></div>
          <div className="h-6 w-2/3 bg-gray-300 rounded-md"></div>
          <div className="h-6 w-1/2 bg-gray-300 rounded-md"></div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="w-40 h-10 bg-gray-400 rounded-lg"></div>
            <div className="w-32 h-10 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCardLoader;
