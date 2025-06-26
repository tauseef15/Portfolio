import React, { useState, useEffect, useRef } from "react";
import TextPressure from "../tools/textPressure";
import FallingText from "../tools/FallingText";
import { AiOutlineWarning } from "react-icons/ai";
import { FaLongArrowAltUp } from "react-icons/fa";
import RotatingText from "../tools/rotatingText";
const rotatingWords = [
  "developer.",
  "editor.",
  "creative mind.",
  "designer.",
  "problem solver.",
  "storyteller.",
  "visionary.",
  "tech enthusiast.",
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const [showHelloMessage, setShowHelloMessage] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showText, setShowText] = useState(false);
  const [fallingTextKey, setFallingTextKey] = useState(0);
  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);
  }, []);

  const handleToggle = () => {
    if (isTouchDevice) {
      setShowText((prev) => !prev);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), 2000);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-full mt-[10vh] md:mt-[20vh] lg:mt-[30vh] relative text-white px-4 sm:px-6 lg:px-10">
      {/* Scrolling Banner */}
      <div className="scroller w-full overflow-hidden whitespace-nowrap">
        <div className="scroller-inner inline-flex items-center animate-scroll">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {Array.from({ length: 9 }).map((_, j) => (
                <React.Fragment key={j}>
                  <h1 className="text text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mx-2 sm:mx-4 whitespace-nowrap">
                    ABOUT ME
                  </h1>
                  <div className="bg-white w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full mx-1 sm:mx-2"></div>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Hover / Tap Block */}
      <div className="w-full flex items-center justify-center my-6 sm:my-10">
        <div
          className="w-full h-full flex items-center justify-center relative overflow-hidden group"
          onClick={handleToggle}
          onTouchStart={handleToggle}
        >
          {!showText && (
            <span className="text-white text-lg sm:text-2xl font-semibold absolute z-10 transition-opacity duration-300 group-hover:opacity-0">
              <span className="hidden sm:inline">HOVER ME</span>
              <span className="inline sm:hidden">TAP ME</span>
            </span>
          )}
          <div
            className={`transition-opacity duration-500 ease-in-out w-full h-full flex items-center justify-center ${
              isTouchDevice
                ? showText
                  ? "opacity-100"
                  : "opacity-0"
                : "group-hover:opacity-100 opacity-0"
            }`}
          >
            <TextPressure
              text="Hello!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
            />
          </div>
        </div>
      </div>

      {/* Main Description */}
      <div className="w-full px-2 sm:px-6 md:px-10">
        <div className="z-10 mt-6 sm:mt-10 flex flex-col justify-start items-start">
          <p className="text-lg sm:text-2xl md:text-5xl xl:text-7xl lg:text-6xl font-semibold py-3 sm:py-5 leading-tight max-w-full">
            "<span style={{ color: "#686868" }}>Engineer</span> by logic,{" "}
            <span style={{ color: "#686868" }}>artist</span> by instinct"
          </p>
          {/* Rotating Words */}
          <div className="flex flex-col items-start h-14 sm:h-22 overflow-hidden my-4 sm:my-10">
            <p className="text-base sm:text-xl md:text-3xl text-left">
              <span className="opacity-70">
                Hellooo!! I am Tauseef Shaikh, a
              </span>
            </p>
            <RotatingText
              texts={[
                "developer.",
                "editor.",
                "creative mind.",
                "designer.",
                "problem solver.",
                "storyteller.",
                "visionary.",
                "tech enthusiast.",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-[#686868] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl justify-center rounded-md uppercase font-bold"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          {/* FallingText Paragraph */}
          <div
            className="w-full text-xs sm:text-base md:text-2xl font-medium border-1 rounded-2xl border-white"
            onClick={() => setShowHelloMessage(true)}
            onTouchStart={() => setShowHelloMessage(true)}
          >
            <FallingText
              key={fallingTextKey}
              text="A Web Developer, Video Editor, and Creative Technophile with a B.Sc. in IT. Passionate about building responsive, user-friendly websites and crafting engaging visual content. Blending logic with creativity, every project is driven by purpose, precision, and a love for digital storytelling."
              highlightedWords={[
                "Web",
                "Developer",
                "Technophile",
                "Video",
                "Editor",
                "Creative",
                "digital",
                "storytelling",
              ]}
              fontSize="1em"
              gravity={0.8}
              mouseConstraintStiffness={0.9}
            />
          </div>
          {showHelloMessage && (
            <div className="w-full flex justify-center mt-4">
              <div
                onClick={() => {
                  setFallingTextKey((prev) => prev + 1); // reset FallingText
                  setShowHelloMessage(false); // hide message
                }}
                className="text-xs sm:text-lg text-red-600 font-medium cursor-pointer hover:underline transition text-center"
              >
                Warned you not to touch! (Tap to reset)
              </div>
            </div>
          )}
          {/* Scrolling Warning */}
          <div className="scroller w-full overflow-hidden whitespace-nowrap mt-10">
            <div className="scroller-inner inline-flex items-center animate-scroll">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {Array.from({ length: 20 }).map((_, j) => (
                    <React.Fragment key={j}>
                      <h1
                        style={{ color: "#686868" }}
                        className="flex items-center text text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mx-2 sm:mx-4 whitespace-nowrap"
                      >
                        W<AiOutlineWarning />
                        RNING !!! DON'T TOUCH
                      </h1>
                      <span
                        style={{ color: "#686868" }}
                        className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mx-2 sm:mx-4 whitespace-nowrap"
                      >
                        <FaLongArrowAltUp />
                      </span>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
