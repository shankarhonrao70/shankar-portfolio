"use client";

import { motion } from "framer-motion";
import { FaRobot, FaMicrochip, FaEye } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#0b1220] text-white px-6 md:px-20 py-20"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <span className="px-4 py-1 text-sm rounded-full bg-indigo-500/20 text-indigo-300">
          ABOUT ME
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Passionate About{" "}
          <span className="text-indigo-400">
            Intelligent Automation
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-gray-300 leading-relaxed">
            I'm a <b>B.Tech Robotics and Automation Engineering</b> student
            passionate about building intelligent systems that connect
            hardware and software. My journey started with curiosity about
            how machines perceive, analyze, and act autonomously.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I specialize in <b>ROS 2, Embedded Systems, and Computer Vision</b>.
            I enjoy developing intelligent robots, automation systems,
            and real-world prototypes that combine AI with hardware.
          </p>

          {/* Information Cards */}
          <div className="grid sm:grid-cols-2 gap-4">

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400 transition">
              <p className="text-sm text-gray-400">
                Education
              </p>
              <p className="font-semibold">
                B.Tech Robotics & Automation
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400 transition">
              <p className="text-sm text-gray-400">
                Location
              </p>
              <p className="font-semibold">
                Pune, India
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400 transition">
              <p className="text-sm text-gray-400">
                Email
              </p>
              <p className="font-semibold">
                shankarhonrao70@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400 transition">
              <p className="text-sm text-gray-400">
                Phone
              </p>
              <p className="font-semibold">
                +91 9373171998
              </p>
            </div>

          </div>

          {/* Resume Button */}
         <a
  href="/Shankar_CV.pdf"
  download
  className="
    inline-block mt-4 px-6 py-3
    rounded-xl
    bg-indigo-500
    hover:bg-indigo-600
    text-white
    transition
    hover:scale-105
    shadow-[0_0_20px_rgba(99,102,241,0.5)]
  "
>
  📄 Download Resume
</a>
        </motion.div>


        {/* RIGHT SIDE - AI TECHNOLOGY CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >

          {/* Embedded Systems */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-400 hover:shadow-[0_0_25px_#3b82f6] hover:-translate-y-2 transition duration-300">
            <div className="flex items-center gap-4">
              <FaMicrochip className="text-4xl text-blue-400" />

              <h3 className="text-xl font-bold text-blue-300">
                Embedded Systems
              </h3>
            </div>

            <p className="text-gray-400 mt-3">
              Arduino, sensors, microcontrollers, real-time control,
              hardware interfacing, and automation systems.
            </p>
          </div>


          {/* Computer Vision */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-green-400 hover:shadow-[0_0_25px_#22c55e] hover:-translate-y-2 transition duration-300">
            <div className="flex items-center gap-4">

              <FaEye className="text-4xl text-green-400" />

              <h3 className="text-xl font-bold text-green-300">
                Computer Vision
              </h3>

            </div>

            <p className="text-gray-400 mt-3">
              OpenCV, MediaPipe, image processing, object detection,
              tracking, and gesture recognition systems.
            </p>
          </div>


          {/* ROS2 & AI Robotics */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-400 hover:shadow-[0_0_25px_#a855f7] hover:-translate-y-2 transition duration-300">

            <div className="flex items-center gap-4">

              <FaRobot className="text-4xl text-purple-400 animate-pulse" />

              <h3 className="text-xl font-bold text-purple-300">
                ROS 2 & AI Robotics
              </h3>

            </div>

            <p className="text-gray-400 mt-3">
              ROS 2 development, Gazebo simulation, SLAM,
              autonomous navigation, and intelligent robotic systems.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}