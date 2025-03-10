import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="relative bg-gradient-to-b bg-[#012B3D] text-white px-6 md:px-16 py-20 md:py-30 overflow-hidden">
      <Navbar />

      <section className="relative flex flex-col md:flex-row items-center justify-between mt-12 md:mt-24 gap-10 z-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Your <span className="text-teal-400">Growth,</span> <br /> Our
            Expertise
          </h1>
          <p className="text-gray-300">
            Data-driven marketing, stunning design & result-focused solutions to
            grow your brand.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-gray-700 active:bg-teal-500 px-6 py-2 rounded-xl  hover:bg-teal-400">
              Get Started
            </button>
            <button className="bg-gray-700 active:bg-teal-500 px-6 py-2 rounded-xl font-medium hover:bg-teal-400">
              See Our Work
            </button>
          </div>
        </div>
        <div className="flex-2 relative group w-full max-w-md md:max-w-xl">
          <img
            src="/src/assets/header-image.jpeg"
            className="object-cover w-full h-full rounded-2xl shadow-lg"
            alt="Team Working"
          />
        </div>
      </section>
    </header>
  );
}
