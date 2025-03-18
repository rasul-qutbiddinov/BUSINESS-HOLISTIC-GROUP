const ServicesItemLoader = () => {
  return (
    <div className="group p-6 rounded-xl bg-slate-800 relative overflow-hidden cursor-pointer animate-pulse">
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
        <div className="h-6 w-1/2 bg-gray-500 rounded-md"></div>
      </div>
      <div className="mt-2 h-4 w-3/4 bg-gray-500 rounded-md"></div>
      <div className="mt-2 h-4 w-2/3 bg-gray-500 rounded-md"></div>
      <div className="mt-2 h-4 w-1/2 bg-gray-500 rounded-md"></div>
    </div>
  );
};

export default ServicesItemLoader;
