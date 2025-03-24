import { useEffect, useRef } from "react";
import play from "../assets/Vector.png";

export default function PlayButton() {
  const textRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const interval = setInterval(() => {
      if (textRef.current) {
        angle = (angle + 1) % 360;
        textRef.current.setAttribute("transform", `rotate(${angle}, 100, 100)`);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <button
      className="relative justify-center items-center 
        w-14 h-14 sm:w-22 sm:h-22 md:w-22 md:h-22 lg:w-26 lg:h-26
        bg-teal-400 rounded-full shadow-lg transition transform hover:scale-110
        hidden sm:flex mt-30"
    >
      {/* ✅ Oq tashqi chiziq va yozuv */}
      <svg
        className="absolute w-14 h-14 sm:w-22 sm:h-22 md:w-22 md:h-22 lg:w-26 lg:h-26"
        viewBox="0 0 200 200"
      >
        <circle
          cx="100"
          cy="100"
          r="65"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />

        {/* ✅ Aylanma yozuv */}
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
              m -70, 0
              a 70,70 0 1,1 140,0
              a 70,70 0 1,1 -140,0"
          />
        </defs>
        <text
          ref={textRef}
          fill="white"
          className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold "
          style={{ letterSpacing: "10px" }}
        >
          <textPath xlinkHref="#circlePath">STUDIO BUSINESS AGENCY</textPath>
        </text>
      </svg>

      {/* ✅ Play ikonkasi ekran o‘lchamiga mos ravishda kichrayadi */}
      <img src={play} alt="play logo" className="w-2 sm:w-3 md:w-4 lg:w-5" />
    </button>
  );
}
