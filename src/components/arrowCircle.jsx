import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Orb from "../tools/orb"; // Ensure correct path

const ArrowCircle = () => {
  const orbRef = useRef(null);
  const arrowRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMove = (x, y) => {
      mousePos.current = { x, y };
    };

    const handleMouseMove = (e) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
      }
    };

    const animate = () => {
      const orb = orbRef.current;
      const arrow = arrowRef.current;

      if (orb && arrow) {
        const rect = orb.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = mousePos.current.x - centerX;
        const dy = mousePos.current.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const range = window.innerHeight * 0.3;

        let targetX = 0;
        let targetY = 0;

        if (distance < range) {
          targetX = dx * 0.6;
          targetY = dy * 0.6;
        }

        currentPos.current.x += (targetX - currentPos.current.x) * 0.1;
        currentPos.current.y += (targetY - currentPos.current.y) * 0.1;

        orb.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;

        const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
        arrow.style.transform = `rotate(${angleDeg}deg)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Add both mouse and touch event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <a
      href="#about"
      className="cursor-pointer block w-fit mx-auto"
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mt-4">
        <div
          ref={orbRef}
          className="absolute w-full h-full rounded-full flex items-center justify-center transition-transform duration-300"
        >
          <Orb
            hoverIntensity={0.7}
            rotateOnHover={false}
            hue={180}
            className="w-full h-full"
          />
          <ArrowUpRight
            ref={arrowRef}
            className="absolute text-[#686868] font-extrabold w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12"
          />
        </div>
      </div>
    </a>
  );
};

export default ArrowCircle;
