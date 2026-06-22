"use client";

import { useState, useEffect, useRef } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";

export default function AIAssistant() {
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState("");

  const [reply, setReply] = useState(`
Hello, I'm S.H.I.V.A 🤖
Smart Human Interface for Vision & Automation.

Your intelligent portfolio assistant.

Ask me about:
• About
• Skills
• Projects
• Experience
• Achievements
• Contact
`);

  const assistantRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        assistantRef.current &&
        !assistantRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [open]);


  const getResponse = (text: string) => {
    const msg = text.toLowerCase();


    if (
      msg.includes("who are you") ||
      msg.includes("shiva")
    ) {
      return `
I am S.H.I.V.A 🤖

Smart Human Interface for Vision & Automation.

I am your robotics portfolio assistant.
`;
    }


    if (
      msg.includes("about") ||
      msg.includes("shankar")
    ) {
      return `
Shankar Honrao is a B.Tech Robotics & Automation Engineering student passionate about intelligent robotic systems.

Specializations:
• ROS 2
• Computer Vision
• Embedded Systems
• AI & Automation
`;
    }


    if (msg.includes("skill")) {
      return `
Technical Skills:

🤖 Robotics:
ROS 2, SLAM, Navigation Stack, Gazebo, RViz

💻 Programming:
Python, C++, OpenCV, MATLAB, Arduino

⚙️ Hardware:
Sensors, Motors, Motor Drivers, Embedded Integration

🎨 Design:
Fusion 360, AutoCAD
`;
    }


    if (msg.includes("project")) {
      return `
Projects:

🤖 Gesture Controlled TurtleBot3
ROS 2 + OpenCV + MediaPipe

🚗 Smart Parking System
Arduino based automation project

🚘 Line Following Robot
STM32 and IR sensor based robot

🛰 Autonomous Mobile Robot
ROS 2 navigation and simulation
`;
    }


    if (
      msg.includes("experience") ||
      msg.includes("intern")
    ) {
      return `
Experience:

🤖 Robotic Software Intern
NishCorp Technologies LLP

• ROS 2 & Gazebo Simulation
• Robot Kinematics
• Control Systems

🏭 Industrial Automation Intern
Saiprasad Enterprises

• X-Y Linear Slide Assembly
• Mechanical Integration
• Wiring & Testing
`;
    }


    if (
      msg.includes("achievement") ||
      msg.includes("award") ||
      msg.includes("competition")
    ) {
      return `
Achievements:

🥈 Runner-Up
Arduino Innovation Competition

Project:
Smart Parking System

🚀 ROBO Mania
Participated in a robotics technical event.
`;
    }


    if (
      msg.includes("contact") ||
      msg.includes("email") ||
      msg.includes("phone")
    ) {
      return `
Contact Information:

📧 Email:
shankarhonrao70@gmail.com

📞 Phone:
+91 9373171998

🔗 LinkedIn:
linkedin.com/in/shankarhonrao
`;
    }


    return `
I can help you with:

• About
• Skills
• Projects
• Experience
• Achievements
• Contact

Try asking:
"Tell me about your projects"
`;
  };


  const sendMessage = () => {
    if (!message.trim()) return;

    setReply(getResponse(message));
    setMessage("");
  };


  return (
    <div ref={assistantRef}>

      {/* Robot Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed bottom-6 right-6 z-50
          w-16 h-16 rounded-full
          bg-gradient-to-r
          from-cyan-500 to-purple-600
          text-white text-2xl
          flex items-center justify-center
          shadow-[0_0_30px_#22d3ee]
          hover:scale-110
          transition duration-300
        "
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>


      {/* Chat Window */}
      {open && (
        <div
          className="
            fixed bottom-28 right-6 z-50
            w-[340px] max-w-[90vw]
            rounded-2xl overflow-hidden
            bg-[#07111f]/95
            border border-cyan-500/30
            backdrop-blur-xl
            shadow-[0_0_40px_#22d3ee]
          "
        >

          {/* Header */}
          <div className="
            p-4 border-b border-cyan-500/30
            bg-cyan-500/10
          ">
            <h2 className="text-cyan-300 font-bold text-lg">
              🤖 S.H.I.V.A Assistant
            </h2>

            <p className="text-xs text-gray-400">
              Smart Human Interface for Vision & Automation
            </p>
          </div>


          {/* Response Area */}
          <div
            className="
              p-4 h-64 overflow-y-auto
              text-sm text-gray-300
              whitespace-pre-line
            "
          >
            {reply}
          </div>


          {/* Input Area */}
          <div
            className="
              flex items-center gap-2 p-3
              border-t border-white/10
            "
          >

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              placeholder="Ask S.H.I.V.A..."
              className="
                flex-1 bg-transparent
                text-white text-sm
                outline-none
                placeholder-gray-500
              "
            />


            <button
              onClick={sendMessage}
              className="
                text-cyan-400 text-lg
                hover:text-cyan-300
                transition
              "
            >
              <FaPaperPlane />
            </button>

          </div>

        </div>
      )}

    </div>
  );
}
