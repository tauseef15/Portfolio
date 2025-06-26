import React, { useState, useEffect } from "react";

function Contact() {
  const [mumbaiTime, setMumbaiTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const timeString = new Intl.DateTimeFormat("en-IN", options).format(
        new Date()
      );
      setMumbaiTime(timeString);
    };

    updateTime(); // initialize immediately
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="h-full px-6 py-12 lg:px-20 flex flex-col justify-between">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left Column */}
        <div className="text-left space-y-4 ">
          {[
            { name: "Index", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" },
          ].map((item, index) => (
            <a key={index} href={item.href}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold m-5 cursor-pointer transition-colors duration-200 hover:text-[#686868]">
                {item.name}
              </h1>
            </a>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between text-left md:text-right space-y-6 w-full md:w-auto">
          <div className="space-y-3">
            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/tauseef-shaikh-4b690b2a0/",
              },
              {
                name: "Instagram",
                url: "https://www.instagram.com/hey.wayne_",
              },
              { name: "Github", url: "https://github.com/tauseef15" },
            ].map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-semibold cursor-pointer hover:text-[#686868] transition-colors block"
              >
                {platform.name}
              </a>
            ))}
          </div>

          <div className="space-y-2">
            <p className="uppercase text-xs sm:text-sm text-gray-400">
              Let's create together
            </p>
            <a
              href="mailto:hey@rogidsgn.com"
              className="text-2xl sm:text-3xl italic font-light hover:underline break-all"
            >
              tauseefshaikh78692.com
            </a>
            <p className="text-md font-medium">
              Mumbai, India — <span>{mumbaiTime}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Logo and Footer */}
      <div className="mt-10 flex flex-col items-start md:items-end gap-6 text-left md:text-right">
        <div className="text-[3rem] sm:text-[4rem] md:text-[6rem] font-black leading-tight">
          <span className="font-sans">hey.</span>
          <span className="italic">tauseef</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span>©2025</span>
          <button className="border px-3 py-1 rounded-full hover:bg-white hover:text-black font-semibold transition-colors duration-200">
            Created by Tauseef.
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
