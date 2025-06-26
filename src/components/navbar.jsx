import React, { useEffect, useRef } from "react";
import {
  FaHome,
  FaLightbulb,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const handRef = useRef(null);

  useEffect(() => {
    const wave = () => {
      const hand = handRef.current;
      if (hand) {
        hand.animate(
          [
            { transform: "rotate(0deg)" },
            { transform: "rotate(20deg)" },
            { transform: "rotate(-10deg)" },
            { transform: "rotate(20deg)" },
            { transform: "rotate(0deg)" },
          ],
          {
            duration: 600,
            iterations: 1,
          }
        );
      }
    };

    const interval = setInterval(wave, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 z-50 bg-transparent">
      {/* Logo */}
      <div className="text-white italic font-bold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap flex items-center gap-1">
        hey.tauseef
        <span
          ref={handRef}
          className="inline-block origin-bottom-right"
          style={{ display: "inline-block" }}
        >
          👋
        </span>
      </div>

      {/* Nav Buttons */}
      <div className="flex items-center bg-[#1f1f1f] border border-[#3a3a3a] shadow-md px-1 py-2 rounded-md overflow-x-auto scrollbar-hide max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-none">
        <a
          href="#home"
          className="min-w-[44px] px-4 sm:px-6 py-2 flex items-center justify-center mx-1 bg-[#2c2c2c] hover:bg-[#3a3a3a] text-white text-sm rounded-md transition"
        >
          <FaHome className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]" />
        </a>
        <a
          href="#about"
          className="min-w-[44px] px-4 sm:px-6 py-2 flex items-center justify-center mx-1 bg-[#2c2c2c] hover:bg-[#3a3a3a] text-white text-sm rounded-md transition"
        >
          <FaLightbulb className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]" />
        </a>
        <a
          href="#projects"
          className="min-w-[44px] px-4 sm:px-6 py-2 flex items-center justify-center mx-1 bg-[#2c2c2c] hover:bg-[#3a3a3a] text-white text-sm rounded-md transition"
        >
          <FaProjectDiagram className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]" />
        </a>
        <a
          href="#contact"
          className="min-w-[44px] px-4 sm:px-6 py-2 flex items-center justify-center mx-1 bg-[#2c2c2c] hover:bg-[#3a3a3a] text-white text-sm rounded-md transition"
        >
          <FaUser className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
