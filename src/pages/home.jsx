import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import ArrowCircle from "../components/arrowCircle";
import AnimatedBlob from "../components/animatedBlob";
import Orb from "../components/orbElement";

function Home() {
  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top-left intro text */}
        <div className="absolute text-white text-[12px] sm:text-xs md:text-sm max-w-[180px] sm:max-w-[220px] leading-snug text-left top-[22%] left-[5%] md:top-[20%] md:left-[15%]">
          I’m <span className="font-semibold">Tauseef</span>, a Web Developer,
          Video Editor & Creative Technophile based in India.
        </div>

        {/* Center content */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="text-center px-4">
            <h1 className="text-white font-semibold text-[8px] sm:text-lg whitespace-nowrap font2">
              LET ME INTRODUCE{" "}
              <span className="font1 text-white text-[16vw] sm:text-[13vw] font-bold leading-none whitespace-nowrap">
                MYSELF
              </span>
            </h1>

            <div className="flex flex-col justify-center items-center mt-2">
              <div className="flex flex-wrap justify-center gap-x-2 text-center">
                <span className="text-white font-semibold text-[8px] sm:text-lg whitespace-nowrap font2">
                  the way I was
                </span>
                <span className="font1 text-white text-[10vw] sm:text-[8vw] font-bold leading-none">
                  MEANT
                </span>
                <span className="text-white font-semibold text-[8px] sm:text-base whitespace-nowrap font2">
                  to be
                </span>
              </div>

              {/* ArrowCircle for medium and up */}
              <div className="mt-4 hidden sm:block">
                <ArrowCircle />
              </div>
            </div>
          </div>

          {/* Bottom-right tagline (all screens) */}
          <div className="absolute text-white text-[12px] sm:text-xs md:text-sm max-w-[200px] sm:max-w-[240px] leading-snug text-right bottom-[25%] right-[5%] md:bottom-[30%] md:right-[20%]">
            <span>
              Blending logic with design to craft seamless websites and
              compelling visuals.
            </span>
          </div>

          {/* Horizontally centered ArrowCircle for small screens only */}
          <div className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 block sm:hidden">
            <ArrowCircle />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-end me-8 gap-6 pb-20 sm:pb-8 ">
          <a
            href="https://www.linkedin.com/in/tauseef-shaikh-4b690b2a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <FaLinkedin className="text-xl sm:text-2xl text-white" />
          </a>
          <a
            href="https://www.instagram.com/hey.wayne_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <FaInstagram className="text-xl sm:text-2xl text-white" />
          </a>
          <a
            href="https://github.com/tauseef15"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <FaGithub className="text-xl sm:text-2xl text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
