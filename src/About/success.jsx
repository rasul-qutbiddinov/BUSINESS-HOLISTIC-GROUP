import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import SuccesseLoader from "../Loaders/AboutSuccesL"; // ✅ Loader import qildik

const Successe = () => {
  const { lang } = useParams();

  const { error, data, isError, isLoading } = useQuery({
    queryKey: ["our_successes"],
    queryFn: () =>
      fetch(
        "https://back.holistic.saidoff.uz/api/collections/our_successes/records?expand=title,number&sort=-created"
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <SuccesseLoader />; // ✅ Loader komponenti yuklanish vaqtida ko‘rinadi
  }

  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-white text-center">Xatolik yuz berdi...</p>;
  }

  const records = data?.items || [];

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center mb-24 px-4">
      {records.map((record) => {
        const title =
          record.expand?.title?.[lang] ||
          record.expand?.title?.uz ||
          "No title available";

        const number =
          record.expand?.number?.[lang] ||
          record.expand?.number?.uz ||
          record.number ||
          "0";

        return (
          <div key={record.id}>
            <h3
              className="text-3xl md:text-4xl font-bold"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h3>
            <p className="mt-2">{number}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Successe;
