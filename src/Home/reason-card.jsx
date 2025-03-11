import React from "react";
import { Lightbulb } from "lucide-react";

const reasons = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We develop websites with high quality, from corporate websites to web applications.",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "We develop websites with high quality, from corporate websites to web applications.",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "We develop websites with high quality, from corporate websites to web applications.",
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "We develop websites with high quality, from corporate websites to web applications.",
  },
];

const Reasons = () => {
  return (
    <section className="px-8 py-16 bg-white text-gray-800">
      <h2 className="text-5xl font-bold text-center mb-12">
        <span className="text-teal-400">Reason</span> for choosing our Business
        Company
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.slice(0, 2).map((reason) => (
            <div
              key={reason.id}
              className="group rounded-2xl p-8 shadow-md transition duration-300 flex flex-col justify-start bg-gray-100 relative overflow-hidden cursor-pointer hover:-translate-y-1"
            >
              <Lightbulb size={28} className="text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-sm">{reason.description}</p>

              <span className="absolute bottom-0 left-0 h-3 w-0 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute bottom-0 right-0 w-3 h-0 bg-teal-400 transition-all duration-300 group-hover:h-full"></span>
            </div>
          ))}

          <div className="group rounded-3xl p-8 shadow-md transition duration-300 flex flex-col justify-start bg-gray-100 md:col-span-2 relative overflow-hidden cursor-pointer hover:-translate-y-1">
            <Lightbulb size={28} className="text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{reasons[2].title}</h3>
            <p className="text-sm">{reasons[2].description}</p>

            <span className="absolute bottom-0 left-0 h-3 w-0 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 w-3 h-0 bg-teal-400 transition-all duration-300 group-hover:h-full"></span>
          </div>
        </div>

        <div className="group rounded-2xl p-8 shadow-md transition duration-300 flex flex-col justify-start bg-slate-900 text-white md:row-span-2 relative overflow-hidden cursor-pointer hover:-translate-y-1">
          <Lightbulb size={28} className="text-teal-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3">{reasons[3].title}</h3>
          <p className="text-sm mb-4">{reasons[3].description}</p>
          <p className="text-sm">{reasons[3].description}</p>

          <span className="absolute bottom-0 left-0 h-3 w-0 bg-teal-500 transition-all duration-500 group-hover:w-full"></span>
          <span className="absolute bottom-0 right-0 w-3 h-0 bg-teal-500 transition-all duration-500 group-hover:h-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
