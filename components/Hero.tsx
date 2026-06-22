"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import ShivaVoice from "./ShivaVoice";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0b1020] text-white"
>

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020] via-[#0f1a3a] to-[#050814]" />

      {/* TECH DOTS */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full">
          <defs>
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#4f7cff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full px-6">

        {/* LEFT SIDE */}
        <div>
          <p className="text-blue-400 mb-3">Hello, I'm</p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Shankar Honrao
          </h1>

          <h2 className="text-xl mt-4 text-cyan-300 font-medium">
            <Typewriter
              words={["Robotics Engineer", "AI Developer", "ROS2 Builder"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-gray-400 mt-5 max-w-md">
            Robotics & Automation Engineering student building intelligent systems,
            embedded robotics, and computer vision applications.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
          <a
          href="#projects"
          className="px-5 py-2 bg-indigo-600 rounded-full hover:scale-105 transition inline-block"
          >
            View Projects
         </a>

             <a
           href="#contact"
          className="px-5 py-2 border border-white/20 rounded-full hover:bg-white/10 transition inline-block"
            >
          Contact Me
            </a>
            
       </div>

          {/* SOCIAL ICONS (FIXED POSITION) */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/shankarhonrao70"
              target="_blank"
              className="p-3 rounded-full border border-gray-500 hover:border-purple-500 hover:shadow-[0_0_15px_#7c3aed] transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/shankarhonrao"
              target="_blank"
              className="p-3 rounded-full border border-gray-500 hover:border-blue-500 hover:shadow-[0_0_15px_#3b82f6] transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailtoshankarhonrao70@gmail.com"
              className="p-3 rounded-full border border-gray-500 hover:border-green-400 hover:shadow-[0_0_15px_#22c55e] transition"
            >
              <HiOutlineMail size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="relative w-[340px] h-[340px]">

            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-indigo-500 blur-3xl opacity-30 animate-pulse" />

            {/* IMAGE */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_40px_rgba(99,102,241,0.4)]">
              <Image
                src="/profile.jpg"
                alt="profile"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* BADGE */}
            <div className="absolute bottom-6 right-0 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-[0_0_25px_rgba(34,211,238,0.8)] animate-bounce">
              🤖 Robotics Engineer
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}