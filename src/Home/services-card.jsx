import React from "react";
import { Monitor } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We develop websites with high quality, from corporate websites to web applications.",
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "We create mobile applications with modern technologies for iOS and Android.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We design user-friendly interfaces that are both beautiful and functional.",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description:
      "We optimize websites to rank higher in search engines and attract more traffic.",
  },
  {
    id: 5,
    title: "E-commerce Solutions",
    description:
      "We build secure and scalable online stores with payment integrations.",
  },
  {
    id: 6,
    title: "Cloud Services",
    description:
      "We provide cloud solutions for data storage, backups, and application hosting.",
  },
];

const ServicesCard = () => {
  return (
    <section className="px-8 py-16 bg-gradient-to-b bg-[#012B3D] text-white relative overflow-hidden">
      {/* Setka va Blur effektlari */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-15">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#00578A"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute -top-40 -right-40 w-[438px] h-[429px] bg-[#00578A] opacity-40 rounded-full blur-[148px]"></div>
        <div className="absolute -bottom-40 -left-40 w-[438px] h-[429px] bg-[#00578A] opacity-30 rounded-full blur-[148px]"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-300 mb-12">
          We offer a wide range of services to help your business grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="group p-6 rounded-xl bg-slate-800 relative overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex gap-4 items-center">
              <Monitor size={32} className="text-teal-400" />
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
            </div>
            <p className="mt-2 text-gray-300 text-sm">{service.description}</p>

            <span className="absolute bottom-0 left-0 h-1 w-0 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 w-1 h-0 bg-teal-400 transition-all duration-300 group-hover:h-full"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCard;
