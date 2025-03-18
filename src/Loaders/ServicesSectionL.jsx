const ServicesCardLoader = () => {
  return (
    <section className="px-8 py-16 bg-gradient-to-b bg-[#012B3D] text-white relative overflow-hidden animate-pulse">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[438px] h-[429px] bg-[#00578A] opacity-40 rounded-full blur-[148px]"></div>
        <div className="absolute -bottom-40 -left-40 w-[438px] h-[429px] bg-[#00578A] opacity-30 rounded-full blur-[148px]"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <div className="h-10 w-3/4 bg-gray-500 mx-auto rounded-md"></div>
        <div className="h-6 w-2/3 bg-gray-600 mx-auto rounded-md mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
        {/* Fake Service Items */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="h-40 bg-gray-600 rounded-lg shadow-lg"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCardLoader;
