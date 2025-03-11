import React from "react";
import { Phone, Edit2 } from "lucide-react";
import Group from "../assets/Group.png";
import About1 from "../assets/about1.jpeg";
import About2 from "../assets/about2.jpeg";

const AboutCard = () => {
  return (
    <section className="px-4 md:px-8 py-12 bg-white flex flex-col items-center justify-center gap-10 relative max-w-[1920px] mx-auto">
      {/* Background Globe */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10"
        style={{
          backgroundImage: `url(${Group})`,
          zIndex: 0,
        }}
      ></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10 w-full max-w-6xl">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-4 max-w-lg w-full mx-auto text-center lg:text-left order-1 lg:order-2">
          <div className="text-sm font-semibold text-teal-500 uppercase tracking-wide flex items-center justify-center lg:justify-start gap-2">
            <span className="h-px w-8 bg-teal-500"></span> IN THE WORLD
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Us
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Every big company needs to thank not only itself, but also those who
            have stood beside it and believed in it. After all, the most
            important principle in our work is trust.
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            Every big company needs to thank not only itself, but also those who
            stood beside it and believed in it. After all, the most important
            principle in our work is trust.
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            Every big company needs to thank not only itself, but also those who
            stood beside it and believed in it. After all, the most important
            principle in our work is trust.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gray-200 active:bg-teal-500 text-teal-400 px-6 py-2 rounded-lg hover:bg-teal-400 hover:text-white flex items-center gap-2 transition w-full sm:w-auto">
              <Edit2 size={16} /> Fill in brief
            </button>
            <button className="bg-gray-200 active:bg-teal-500 px-6 py-2 rounded-xl text-teal-400 font-medium hover:bg-teal-400 hover:text-white flex items-center gap-2 transition w-full sm:w-auto">
              <Phone size={16} /> Call
            </button>
          </div>
        </div>

        {/* Images Section */}
        <div className="flex flex-col items-center gap-6 relative z-20 order-2 lg:order-1">
          {/* Rasm 1 */}
          <div className="relative group">
            <div className="absolute w-full h-full bg-transparent transition-all duration-300 ease-in-out group-hover:bg-blue-500 rounded-2xl group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <img
              src={About1}
              className="relative rounded-2xl object-cover shadow-lg w-full max-w-md h-auto border-[4px] border-transparent transition-all duration-300 ease-in-out group-hover:border-blue-500 group-hover:translate-x-3 group-hover:translate-y-3"
              alt="Team meeting"
            />
          </div>

          {/* Rasm 2 */}
          <div className="relative group">
            <div className="absolute w-full h-full bg-transparent transition-all duration-300 ease-in-out group-hover:bg-blue-500 rounded-2xl group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <img
              src={About2}
              className="relative rounded-2xl object-cover shadow-lg w-full max-w-md h-auto border-[4px] border-transparent transition-all duration-300 ease-in-out group-hover:border-blue-500 group-hover:translate-x-3 group-hover:translate-y-3"
              alt="Team discussing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
