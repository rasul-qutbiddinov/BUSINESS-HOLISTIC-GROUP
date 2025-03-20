import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../index.css";

const socialLinks = [
  "Google",
  "Twitter",
  "Facebook",
  "Instagram",
  "Dribbble",
  "Behance",
  "Google",
  "Facebook",
  "Instagram",
  "Dribbble",
  "Behance",
];

export default function SocialMediaScroll() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="relative w-[80%] mx-auto bg-[#04344F] py-3 mt-20 mb-0 rounded-full overflow-visible">
        {/* Chapga o'tish tugmasi */}
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-1">
          <div className="w-16 h-16 flex justify-center items-center bg-[#012235] bg-opacity-100 rounded-full shadow-2xl border-2 border-[#012235]">
            <button
              onClick={scrollLeft}
              className="p-4 text-white bg-[#04344F] transition rounded-full"
            >
              <FaChevronLeft size={16} />
            </button>
          </div>
        </div>

        {/* O‘ngga o'tish tugmasi */}
        <div className="absolute -right-7 top-1/2 transform -translate-y-1/2 z-1">
          <div className="w-16 h-16 flex justify-center items-center bg-[#04273b] bg-opacity-100 rounded-full shadow-2xl ">
            <button
              onClick={scrollRight}
              className="p-4 text-white bg-[#033958] transition rounded-full"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable social media list */}
        <div
          ref={scrollRef}
          className="flex items-center justify-start space-x-6 px-12 mx-auto overflow-x-auto scroll-smooth no-scrollbar"
          style={{ whiteSpace: "nowrap" }}
        >
          {socialLinks.map((link, index) => (
            <span
              key={index}
              className="text-white text-lg font-medium inline-flex items-center"
            >
              {link}
              {index !== socialLinks.length - 1 && (
                <span className=" ml-6 text-gray-300">✰</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
