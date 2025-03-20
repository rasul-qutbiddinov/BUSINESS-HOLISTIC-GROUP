import { FaPlay } from "react-icons/fa";
import { useEffect, useRef } from "react";
import play from "../assets/Vector.png";

export default function MobilePlayButton() {
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
      className="relative flex justify-center items-center 
      w-35 h-35 bg-teal-400 rounded-full shadow-lg transition transform hover:scale-110
      sm:hidden"
    >
      {/* ✅ Oq tashqi chiziq va yozuv */}
      <svg className="absolute w-37 h-37" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />

        {/* ✅ Aylanma yozuv */}
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
              m -65, 0
              a 65,65 0 1,1 130,0
              a 65,65 0 1,1 -130,0"
          />
        </defs>
        <text
          ref={textRef}
          fill="white"
          fontSize="17"
          fontWeight="bold"
          style={{ letterSpacing: "10px" }}
        >
          <textPath xlinkHref="#circlePath">STUDIO BUSINESS AGENCY</textPath>
        </text>
      </svg>

      <img src={play} alt="play logo" className="w-6" />
    </button>
  );
}
