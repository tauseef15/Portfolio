import React, { useEffect, useRef, useState } from "react";

const ElasticLine = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [path, setPath] = useState("");

  useEffect(() => {
    const updatePath = (e) => {
      const container = containerRef.current;
      const pathEl = pathRef.current;
      if (!container || !pathEl) return;

      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const width = rect.width;
      const height = rect.height;
      const baseY = height / 2;
      const threshold = 100;

      const verticalDist = Math.abs(mouseY - (rect.top + baseY));

      const curveStrength =
        verticalDist < threshold ? -(mouseY - (rect.top + baseY)) * 0.4 : 0;

      const cp1x = width * 0.25;
      const cp2x = width * 0.75;

      const newPath = `
        M 0,${baseY}
        C ${cp1x},${baseY + curveStrength}
          ${cp2x},${baseY + curveStrength}
          ${width},${baseY}
      `;
      setPath(newPath);
    };

    window.addEventListener("mousemove", updatePath);
    return () => window.removeEventListener("mousemove", updatePath);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-32 md:h-40 lg:h-52 relative"
    >
      <svg className="absolute top-0 left-0 w-full h-full">
        <path
          ref={pathRef}
          d={path}
          fill="transparent"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default ElasticLine;
