import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Skroll holatini tekshiradi
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Sahifaning yuqorisiga qaytaradi
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-14 right-8 bg-[#032037] text-white p-3 rounded-full shadow-md hover:bg-[#053053] transition-colors"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
};

export default BackToTopButton;
