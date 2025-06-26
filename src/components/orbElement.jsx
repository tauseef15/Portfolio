import React, { useState } from "react";
import Orb from "../tools/orb";

function OrbElement() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute bottom-0 left-0 z-10
                 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]
                 md:w-[150px] md:h-[150px]
                 lg:w-[180px] lg:h-[180px]"
    >
      {/* Orb background */}
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={isHovered}
      />
    </div>
  );
}

export default OrbElement;
