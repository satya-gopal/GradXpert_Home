import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="
          fixed
          bottom-10 right-4 sm:bottom-24 sm:right-6
          p-2 sm:p-3
          rounded-full
          bg-blue-600 text-white
          shadow-lg
          hover:bg-blue-700
          transition
          z-[9999]
        "
        style={{ pointerEvents: "auto" }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} className="sm:hidden" />
        <ArrowUp size={20} className="hidden sm:block" />
      </button>


    )
  );
};

export default ScrollToTopButton;
