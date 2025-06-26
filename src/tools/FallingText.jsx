import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const FallingText = ({
  text,
  highlightedWords = [],
  fontSize = "1.5rem",
  gravity = 1,
  mouseConstraintStiffness = 0.2,
}) => {
  const containerRef = useRef(null);
  const staticRef = useRef(null);
  const animatedRef = useRef(null);
  const [fallen, setFallen] = useState(false);

  const startPhysics = () => {
    if (fallen) return;
    setFallen(true);

    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Runner } = Matter;
    const engine = Engine.create();
    const world = engine.world;
    engine.gravity.y = gravity;

    const container = containerRef.current;
    const staticEl = staticRef.current;
    const animatedEl = animatedRef.current;

    const containerRect = container.getBoundingClientRect();

    const staticSpans = staticEl.querySelectorAll("span");
    const spanData = Array.from(staticSpans).map((span) => {
      const rect = span.getBoundingClientRect();
      return {
        text: span.innerText,
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
        width: rect.width,
        height: rect.height,
        isHighlighted: span.classList.contains("highlight"),
      };
    });

    staticEl.style.display = "none";

    const fallingSpans = spanData.map(({ text, isHighlighted }) => {
      const span = document.createElement("span");
      span.className = `absolute inline-block whitespace-nowrap select-none pointer-events-none ${
        isHighlighted ? "text-[#686868] font-bold" : ""
      }`;
      span.innerText = text;
      animatedEl.appendChild(span);
      return span;
    });

    const bodies = spanData.map(({ x, y, width, height }) =>
      Bodies.rectangle(x, y, width, height, {
        restitution: 0.9,
        friction: 0.1,
        frictionAir: 0.01,
      })
    );

    World.add(world, bodies);

    const boundaries = [
      Bodies.rectangle(containerRect.width / 2, containerRect.height + 30, containerRect.width, 60, { isStatic: true }),
      Bodies.rectangle(-30, containerRect.height / 2, 60, containerRect.height, { isStatic: true }),
      Bodies.rectangle(containerRect.width + 30, containerRect.height / 2, 60, containerRect.height, { isStatic: true }),
    ];
    World.add(world, boundaries);

    const mouse = Mouse.create(container);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });
    World.add(world, mouseConstraint);

    const runner = Runner.create();
    Runner.run(runner, engine);

    const update = () => {
      bodies.forEach((body, i) => {
        const span = fallingSpans[i];
        span.style.left = `${body.position.x}px`;
        span.style.top = `${body.position.y}px`;
        span.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      requestAnimationFrame(update);
    };

    update();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[200px] sm:h-[200px]overflow-hidden cursor-pointer"
      onClick={startPhysics}
    >
      {/* Static Text */}
      <div
        ref={staticRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-wrap justify-center text-center w-[90%]"
        style={{ fontSize, lineHeight: 1.4 }}
      >
        {text.split(" ").map((word, idx) => {
  const cleanWord = word.replace(/[.,!?]/g, "").trim();
  const isHighlighted = highlightedWords.includes(cleanWord);

  return (
    <span
      key={idx}
      className={`inline-block mx-[2px] ${isHighlighted ? "highlight font-bold" : ""}`}
      style={isHighlighted ? { color: "#686868" } : {}}
    >
      {word + " "}
    </span>
  );
})}

      </div>

      {/* Animated Layer */}
      <div
        ref={animatedRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ fontSize, lineHeight: 1.4 }}
      />
    </div>
  );
};

export default FallingText;
