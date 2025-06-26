import React, { useEffect, useRef } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Contact from "./pages/contact";
import ScrollWrapper from "./tools/ScrollWrapper";
import ElasticLine from "./components/ElasticLine";
import Navbar from "./components/navbar";
import AnimatedBlob from "./components/animatedBlob";

function App() {
  const circleRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile && circleRef.current) {
      circleRef.current.style.display = "none";
      return;
    }

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      if (circleRef.current) {
        circleRef.current.style.left = `${pos.current.x}px`;
        circleRef.current.style.top = `${pos.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseDown = () =>
      circleRef.current?.classList.add("scale-150");
    const handleMouseUp = () =>
      circleRef.current?.classList.remove("scale-150");

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const handleHoverIn = (e) => {
      if (e.target.closest("a")) {
        circleRef.current?.classList.add("bg-red-500");
      }
    };
    const handleHoverOut = (e) => {
      if (e.target.closest("a")) {
        circleRef.current?.classList.remove("bg-red-500");
      }
    };

    if (!isMobile) {
      document.addEventListener("mouseover", handleHoverIn);
      document.addEventListener("mouseout", handleHoverOut);
    } else {
      document.addEventListener("touchstart", handleHoverIn);
      document.addEventListener("touchend", handleHoverOut);
    }

    return () => {
      if (!isMobile) {
        document.removeEventListener("mouseover", handleHoverIn);
        document.removeEventListener("mouseout", handleHoverOut);
      } else {
        document.removeEventListener("touchstart", handleHoverIn);
        document.removeEventListener("touchend", handleHoverOut);
      }
    };
  }, []);

  return (
    <>
      {/* Cursor Circle */}
      <div
        ref={circleRef}
        className="fixed w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] transition-transform duration-200 ease-out mix-blend-difference"
        style={{
          top: 0,
          left: 0,
          position: "fixed",
          transform: "translate(-50%, -50%)",
        }}
      />

      <Navbar />

      <ScrollWrapper>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="contact">
          <ElasticLine />
          <Contact />
        </section>
      </ScrollWrapper>
    </>
  );
}

export default App;
