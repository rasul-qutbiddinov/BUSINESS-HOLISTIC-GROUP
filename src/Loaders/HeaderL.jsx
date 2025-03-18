const HeaderLoader = () => {
  return (
    <div className="w-full px-4 md:px-16 py-10 md:py-30 bg-[#012B3D] text-white animate-pulse">
      {/* Navbar yuklanish animatsiyasi */}
      <div className="h-12 w-32 bg-gray-700 rounded-md"></div>

      <section className="mt-12 md:mt-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Matn qismi yuklanmoqda */}
        <div className="flex-1 space-y-4 md:space-y-6">
          <div className="h-10 w-3/4 bg-gray-600 rounded-md"></div>
          <div className="h-6 w-2/3 bg-gray-600 rounded-md"></div>
          <div className="flex gap-2 md:gap-4">
            <div className="w-32 h-10 bg-gray-700 rounded-md"></div>
            <div className="w-40 h-10 bg-gray-700 rounded-md"></div>
          </div>
        </div>

        {/* Rasm joyi yuklanmoqda */}
        <div className="flex-2 relative w-full md:w-80 h-60 bg-gray-700 rounded-3xl"></div>
      </section>
    </div>
  );
};

export default HeaderLoader;
