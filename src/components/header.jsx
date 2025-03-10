import Navbar from "./navbar";
import Image1 from "../assets/header-image.jpeg"

export default function Header() {
  return (
    <header className="relative bg-gradient-to-b bg-[#012B3D] text-white px-4 md:px-16 py-10 md:py-30 overflow-hidden">
      {/* Setka va Blur effektlari */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-15">
          <defs>
            <pattern
              id="grid"
              width="10"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 0"
                fill="none"
                stroke="#00578A"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute -top-40 -right-40 w-[438px] h-[429px] bg-[#00578A] opacity-40 rounded-full blur-[148px]"></div>
        <div className="absolute -bottom-40 -left-40 w-[438px] h-[429px] bg-[#00578A] opacity-30 rounded-full blur-[148px]"></div>
      </div>

      <Navbar />

      <section className="relative flex flex-col md:flex-row items-center justify-between mt-12 md:mt-24 gap-6 md:gap-10 z-10">
        <div className="flex-1 space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Your <span className="text-teal-400">Growth,</span> <br /> Our
            Expertise
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            Data-driven marketing, stunning design & result-focused solutions to
            grow your brand.
          </p>

          <div className="flex gap-2 md:gap-4">
            <button className="bg-gray-700 px-4 md:px-6 py-2 rounded-xl hover:bg-teal-400">
              Get Started
            </button>
            <button className="bg-gray-700 px-4 md:px-6 py-2 rounded-xl font-medium hover:bg-teal-400">
              See Our Work
            </button>
          </div>
        </div>
        <div className="flex-2 relative group w-full md:w-auto">
          <div className="relative rounded-3xl shadow-lg overflow-hidden bg-[#4CCED0]">
            <img
              src={Image1}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:translate-x-[-20px] group-hover:translate-y-[-20px]"
              alt="Team Working"
            />
          </div>
        </div>
      </section>
    </header>
  );
}
