import { Rocket } from "lucide-react";
import AboutHeader from "./about_header";
import Successe from "./success";
import Corusel from "./corusel";
import Partner from "./partner";

const About = () => {
  return (
    <div className="bg-[#011727] text-white pt-30 py-10 px-4 sm:px-8 md:px-12 lg:px-20">

      
      <AboutHeader />
      <Successe />
      <Corusel />
      <Partner />


      
      <section className="py-10 bg-[#011727] flex flex-col items-center justify-center gap-6 max-w-[1200px] mx-auto mb-6 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Stay in the know:
        </h2>
        <div className="bg-[#012B3D] text-white p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center gap-4 w-full max-w-4xl">
          <input
            type="text"
            placeholder="Your name"
            className="bg-[#011727] text-white rounded-md p-2 w-full sm:flex-1"
          />
          <input
            type="text"
            placeholder="+998 -- --- -- --"
            className="bg-[#011727] text-white rounded-md p-2 w-full sm:flex-1"
          />
          <button className="bg-teal-400 flex flex-row gap-2 text-white px-10 py-2 rounded-lg hover:bg-teal-300 transition-colors w-full sm:w-auto">
            Submit <Rocket size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
