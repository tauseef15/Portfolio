import React, { useState, useEffect, useRef } from "react";

function Hero() {
  const [dividerX, setDividerX] = useState(window.innerWidth / 2);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setDividerX(window.innerWidth / 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setDividerX(e.clientX);
  };

  const handleMouseUp = () => setDragging(false);
  const handleMouseDown = () => setDragging(true);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div ref={containerRef} className="relative w-screen h-screen overflow-hidden">
      {/* White Background */}
      <div className="absolute inset-0 bg-white z-0 flex items-center justify-center">
        <h1
          style={{ color: "#0e0d0d" }}
          className="middle-text text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold select-none whitespace-nowrap"
        >
          TAUSEEF SHAIKH
        </h1>
      </div>

      {/* Black overlay with clip */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-center"
        style={{
          backgroundColor: "#0e0d0d",
          clipPath: `inset(0 0 0 ${dividerX}px)`,
          transition: dragging ? "none" : "clip-path 0.05s",
        }}
      >
        <h1 className="middle-text text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white select-none whitespace-nowrap">
          TAUSEEF SHAIKH
        </h1>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 h-full bg-gray-400 z-20"
        style={{ left: dividerX - 1.5 }}
      />

      {/* Draggable circle */}
      <div
        onMouseDown={handleMouseDown}
        className="absolute w-6 h-6 rounded-full z-30 cursor-grab active:cursor-grabbing transition-transform border border-gray-700 flex items-center justify-center"
        style={{
          left: dividerX - 12,
          top: 60, // Initial Y-position near top
          background: "linear-gradient(to right, black 50%, white 50%)",
        }}
      >
        {!dragging && (
          <>
            <span className="absolute text-xs text-black whitespace-nowrap left-[-2.3rem]">
              Drag
            </span>
            <span className="absolute text-xs text-white whitespace-nowrap left-[2rem]">
              Me
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default Hero;
