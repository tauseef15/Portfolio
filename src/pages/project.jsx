import React, { useRef, useState } from "react";
import { FaReact, FaNodeJs, FaJava, FaGithub, FaHtml5 } from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import TrueFocus from "../tools/TrueFocus";

function Project() {
  const videoRefs = {
    video1: useRef(null),
    video2: useRef(null),
    video3: useRef(null),
    video4: useRef(null),
  };

  const handleMouseEnter = (ref) => {
    if (ref.current && window.innerWidth > 768) {
      ref.current.muted = false; // just unmute
    }
  };

  const handleMouseLeave = (ref) => {
    if (ref.current && window.innerWidth > 768) {
      ref.current.muted = true; // just mute
    }
  };

  const handleTouch = (ref) => {
    if (ref.current && window.innerWidth <= 768) {
      ref.current.muted = false;
      ref.current.play();
    }
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const projects = [
    {
      name: "HIVE",
      description:
        "HIVE is a developer-centric social media platform inspired by Instagram, tailored specifically for coders.",
      techStack: [
        { name: "React", icon: <FaReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
      live: "https://tauseef15.github.io/under-construction/",
      github: "#",
    },
    {
      name: "Souled Store",
      description:
        "Functional redesign of 'The Souled Store' to implement core e-commerce features.",
      techStack: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Express", icon: <SiExpress /> },
      ],
      live: "https://souled-store-snowy.vercel.app/",
      github: "https://github.com/tauseef15/SouledStore",
    },
    {
      name: "ShareMe",
      description:
        "File and media sharing web app for secure uploads, downloads, and shareable links.",
      techStack: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "EJS", icon: <FaHtml5 /> },
      ],
      live: "https://shareme-w3f5.onrender.com/",
      github: "https://github.com/tauseef15/ShareMe",
    },
    {
      name: "HeySiri",
      description:
        "AI-powered chatbot inspired by Gemini, developed in Java with MongoDB and Node.js.",
      techStack: [
        { name: "Java", icon: <FaJava /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Node.js", icon: <FaNodeJs /> },
      ],
      live: "#",
      github: "https://github.com/tauseef15/heySiri",
    },
  ];

  return (
    <div className="py-10 px-4 md:px-6 lg:px-10 mt-[10vh] md:mt-[20vh] lg:mt-[30vh] h-full flex flex-col items-center justify-start text-white">
      {/* Title */}
      <div className="mb-10 mx-auto w-fit rounded-lg shadow-lg flex items-center justify-center">
        <TrueFocus
          sentence="MY PROJECTS"
          manualMode={true}
          blurAmount={4}
          borderColor="#686868"
          glowColor="rgba(104, 104, 104, 0.5)"
          animationDuration={1}
          pauseBetweenAnimations={1}
        />
      </div>

      {/* Project Cards */}
      <div className="flex flex-col gap-4 h-[600px] w-full mt-22 md:mt-32">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`group flex-1 ${
                isActive ? "flex-[3]" : ""
              } hover:flex-[3] transition-all duration-500 relative overflow-hidden rounded-xl p-4 md:p-5 lg:p-6 bg-zinc-900 text-white`}
              onClick={() => isMobile && toggleCard(index)}
            >
              <div className="relative h-full w-full flex flex-col justify-center items-center text-center">
                {/* Default */}
                <div
                  className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-8
                    ${
                      isMobile
                        ? isActive
                          ? "opacity-0 -translate-y-4"
                          : "opacity-100 translate-y-0"
                        : "group-hover:opacity-0 group-hover:-translate-y-4"
                    }
                    transition-all duration-500`}
                >
                  <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    {project.name}
                  </h2>
                  <div className="flex flex-wrap gap-1 md:gap-3 justify-center mt-2 md:mt-3 text-[10px] md:text-sm text-white">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-full border border-transparent group-hover:border-[#686868] transition"
                      >
                        <span className="text-base">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover or Tap View */}
                <div
                  className={`${
                    isMobile
                      ? isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                      : "group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-4"
                  } transition-all duration-500`}
                >
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm md:text-lg mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-4 justify-center text-sm md:text-base">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#686868] rounded hover:bg-[#5c5c5c] transition"
                    >
                      View Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[#686868] rounded hover:bg-[#686868] hover:text-black transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Video Section */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-4 px-4 mt-10">
        {/* Mobile Video */}
        <div className="md:hidden w-full h-[200px] sm:h-[240px] overflow-hidden">
          <video
            ref={videoRefs.video3}
            src="https://res.cloudinary.com/dfwjavicq/video/upload/v1750853816/insta2_ij9fym.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Desktop Row */}
        <div className="flex flex-row justify-center items-start gap-4 w-full">
          <div className="w-fit sm:w-[100px] md:w-fit h-[240px] md:h-[640px] lg:h-[840px] overflow-hidden">
            <video
              ref={videoRefs.video1}
              src="https://res.cloudinary.com/dfwjavicq/video/upload/v1750853818/insta_y7i3bq.mp4"
              autoPlay
              loop
              muted
              playsInline
              onMouseEnter={() => handleMouseEnter(videoRefs.video1)}
              onMouseLeave={() => handleMouseLeave(videoRefs.video1)}
              onTouchStart={() => handleTouch(videoRefs.video1)}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="hidden md:flex flex-col gap-4 w-full md:w-[60%] max-w-[720px]">
            <div className="w-full h-[320px] lg:h-[420px] overflow-hidden">
              <video
                ref={videoRefs.video3}
                src="https://res.cloudinary.com/dfwjavicq/video/upload/v1750853816/insta2_ij9fym.mp4"
                autoPlay
                loop
                muted
                playsInline
                onMouseEnter={() => handleMouseEnter(videoRefs.video3)}
                onMouseLeave={() => handleMouseLeave(videoRefs.video3)}
                onTouchStart={() => handleTouch(videoRefs.video3)}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full h-[320px] lg:h-[420px] overflow-hidden">
              <video
                ref={videoRefs.video4}
                src="https://res.cloudinary.com/dfwjavicq/video/upload/v1750853561/4_ygrvaq.mp4"
                autoPlay
                loop
                muted
                playsInline
                onMouseEnter={() => handleMouseEnter(videoRefs.video4)}
                onMouseLeave={() => handleMouseLeave(videoRefs.video4)}
                onTouchStart={() => handleTouch(videoRefs.video4)}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="w-fit sm:w-[100px] md:w-fit h-[240px] md:h-[640px] lg:h-[840px] overflow-hidden">
            <video
              ref={videoRefs.video2}
              src="https://res.cloudinary.com/dfwjavicq/video/upload/v1750853562/2_xtjx8o.mp4"
              autoPlay
              loop
              muted
              playsInline
              onMouseEnter={() => handleMouseEnter(videoRefs.video2)}
              onMouseLeave={() => handleMouseLeave(videoRefs.video2)}
              onTouchStart={() => handleTouch(videoRefs.video2)}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Mobile Bottom Video */}
        <div className="md:hidden mt-4 w-full h-[200px] sm:h-[240px] overflow-hidden">
          <video
            ref={videoRefs.video4}
            src="https://res.cloudinary.com/dfwjavicq/video/upload/v1750853561/4_ygrvaq.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Footer */}
      <span className="mt-7 text-sm">
        Visit the{" "}
        <a
          href="https://www.instagram.com/hey.wayne_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#686868] underline"
        >
          Instagram page
        </a>{" "}
        for more such content.
      </span>
    </div>
  );
}

export default Project;
