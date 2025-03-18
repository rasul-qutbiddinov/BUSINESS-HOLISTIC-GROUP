import { FaPlay } from "react-icons/fa";
import { useEffect, useRef } from "react";
import play from "../assets/Vector.png";

export default function PlayButton() {
  const textRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const interval = setInterval(() => {
      if (textRef.current) {
        angle = (angle + 1) % 360; // Har 50ms da burchakni o'zgartiramiz
        textRef.current.setAttribute("transform", `rotate(${angle}, 100, 100)`);
      }
    }, 50); // 50ms da 1 gradus aylanadi

    return () => clearInterval(interval);
  }, []);

  return (
    <button className="relative w-30 h-30 flex mr-80 mt-35 justify-center items-center bg-teal-400 rounded-full shadow-lg transition transform hover:scale-110">
      {/* ✅ Oq tashqi chiziq va yozuv */}
      <svg className="absolute w-34 h-34" viewBox="0 0 200 200">
        {/* Oq doira ichkarida bo‘lishi uchun radius kichraytirildi */}
        <circle
          cx="100"
          cy="100"
          r="65"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />

        {/* ✅ Aylanma yozuv (oq chiziq bo‘ylab, tinimsiz aylanadi) */}
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
              m -70, 0
              a 70,70 0 1,1 140,0
              a 70,70 0 1,1 -140,0"
          />
        </defs>
        <text ref={textRef} fill="white" fontSize="16" fontWeight=" Inter">
          <textPath xlinkHref="#circlePath" startOffset="50%">
            STUDIO BUSINESS AGENCY • STUDIO BUSINESS AGENCY •
          </textPath>
        </text>
      </svg>
      <img src={play} alt="play logo" />
    </button>
  );
}
