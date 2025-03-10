import React from "react";
import TestimonialsCard from "../Home/testimonials";

const Comments = () => {
  return (
    <div className="mt-16 mb-0 pb-0 bg-[#012B3D] text-white py-12 md:py-24 px-4 md:px-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl xl:text-8xl font-bold text-white">
          COMMENTS
        </h2>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <TestimonialsCard />
      </div>
    </div>
  );
};

export default Comments;
