import React, { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ScrollWrapper = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let scroll;

    import("locomotive-scroll").then((LocomotiveScrollModule) => {
      const LocomotiveScroll = LocomotiveScrollModule.default;

      scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      ScrollTrigger.scrollerProxy(containerRef.current, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: containerRef.current.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () => scroll.update());
      ScrollTrigger.refresh();
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
};

export default ScrollWrapper;
