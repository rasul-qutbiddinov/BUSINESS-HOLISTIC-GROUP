const ReasonsLoader = () => {
  return (
    <section className="px-8 py-16 bg-white text-gray-800 animate-pulse">
      {/* Sarlavha yuklanmoqda */}
      <div className="h-10 w-3/4 bg-gray-300 mx-auto rounded-md mb-12"></div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Yuqoridagi 3 ta kartochka */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="h-32 bg-gray-200 rounded-xl"></div>
        ))}

        {/* Pastdagi 1 ta katta kartochka */}
        <div className="h-40 md:col-span-3 bg-gray-200 rounded-xl"></div>
      </div>
    </section>
  );
};

export default ReasonsLoader;
