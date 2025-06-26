import React, { useState, useEffect, useRef } from "react";
import TextPressure from "../tools/textPressure";
import FallingText from "../tools/FallingText";
import { AiOutlineWarning } from "react-icons/ai";
import { FaLongArrowAltUp } from "react-icons/fa";

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
const description = `A Web Developer, Video Editor, and Creative Technophile with a B.Sc. in IT. Passionate about building responsive, user-friendly websites and crafting engaging visual content. Blending logic with creativity, every project is driven by purpose, precision, and a love for digital storytelling.`;

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

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
      {/* Infinite Scrolling Header */}
      <div className="scroller w-full overflow-hidden whitespace-nowrap">
        <div className="scroller-inner inline-flex items-center animate-scroll">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {Array.from({ length: 9 }).map((_, j) => (
                <React.Fragment key={j}>
                  <h1 className="text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mx-4 whitespace-nowrap">
                    ABOUT ME
                  </h1>
                  <div className="bg-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full mx-2"></div>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Hover TextPressure Block */}
      <div className="w-full flex items-center justify-center my-10">
        <div className="w-full h-full flex items-center justify-center relative group overflow-hidden">
          <span className="text-white text-2xl font-semibold absolute transition-opacity duration-300 group-hover:opacity-0 z-10">
            HOVER ME
          </span>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out w-full h-full flex items-center justify-center">
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
      <div className="w-full px-4 sm:px-8 md:px-10">
        <div className="z-10 mt-5 sm:mt-10 flex flex-col justify-start items-start">
          <p className="text-2xl sm:text-3xl md:text-6xl xl:text-7xl lg:text-8xl font-semibold py-3 sm:py-5 leading-tight">
            "<span style={{color:"#686868"}}>Engineer</span> by logic,{" "}
            <span style={{color:"#686868"}}>artist</span> by instinct"
          </p>

          {/* Rotating Word Block */}
          <div className="flex flex-col items-start h-20 sm:h-24 overflow-hidden my-3 sm:my-15">
            <p className="text-xl md:text-4xl flex flex-col gap-1 text-left">
              <span className="opacity-70">
                Hellooo!! I am Tauseef Shaikh, a
              </span>
              <span  className="relative h-12 w-full uppercase font-semibold overflow-hidden block">
                <span
                  className="absolute left-0 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateY(-${currentIndex * 3}rem)`,
                  }}
                >
                  {rotatingWords.map((word, i) => (
                    <div
                      className="h-12 flex items-center justify-start text-left text-5xl max-sm:text-3xl"
                      key={i}
                    >
                      {word}
                    </div>
                  ))}
                </span>
              </span>
            </p>
          </div>

          {/* Paragraph */}
          <div className="w-full sm:w-11/12 md:w-4/4 text-sm sm:text-base md:text-2xl font-medium border-1 rounded-2xl border-white">
            <FallingText
              text={`A Web Developer, Video Editor, and Creative Technophile with a B.Sc. in IT. Passionate about building responsive, user-friendly websites and crafting engaging visual content. Blending logic with creativity, every project is driven by purpose, precision, and a love for digital storytelling.`}
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
          <div className="scroller w-full overflow-hidden whitespace-nowrap mt-10">
            <div className="scroller-inner inline-flex items-center animate-scroll">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {Array.from({ length: 20 }).map((_, j) => (
                    <React.Fragment key={j}>
                      <h1 style={{color:"#686868"}} className="flex text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mx-4 whitespace-nowrap">
                        W<AiOutlineWarning />RNING !!! DON'T TOUCH
                      </h1>
                      <span style={{color:"#686868"}} className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mx-4 whitespace-nowrap" ><FaLongArrowAltUp /></span>
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
