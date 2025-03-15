import React from "react";
import TestimonialsCard from "../Home/testimonials";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
const Comments = () => {

const { lang } = useParams();

  const { error, data, isError, isLoading } = useQuery({
    queryKey: ["comments_titles "],
    queryFn: () =>
      fetch(
        "https://back.holistic.saidoff.uz/api/collections/comments_titles/records/x8e8b10lbem494k?expand=title,"
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <p className="text-white text-center">Yuklanmoqda...</p>;
  }

  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-white text-center">Xatolik yuz berdi...</p>;
  }

  // Data validatsiyasi yaxshilandi va aniqlashtirildi
  const record = data || {};

  const title =
    record.expand?.title?.[lang] ||
    record.expand?.title?.uz ||
    "No title available";
  
  return (
    <div className="mt-16 mb-0 pb-0 bg-[#012B3D] text-white py-12 md:py-24 px-4 md:px-8">
      <div className="text-center">
        <h2
          className="text-4xl md:text-6xl xl:text-8xl font-bold text-white"
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h2>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <TestimonialsCard />
      </div>
    </div>
  );
};

export default Comments;
