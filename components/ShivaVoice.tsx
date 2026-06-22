"use client";

import { FaMicrophone } from "react-icons/fa";

export default function ShivaVoice() {

  const activateVoice = () => {

    const message = new SpeechSynthesisUtterance(
      "Hello, I am SHIVA. Smart Human Interface for Vision and Automation. Welcome to Shankar Honrao's Robotics Lab. I am here to guide you through projects, skills, experience and achievements."
    );

    // Voice settings
    message.rate = 0.9;
    message.pitch = 1;
    message.volume = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(message);
  };


  return (
    <button
      onClick={activateVoice}
      className="
        flex items-center gap-3
        px-6 py-3
        rounded-full
        bg-gradient-to-r
        from-cyan-500 to-purple-600
        text-white
        font-semibold
        shadow-[0_0_25px_#22d3ee]
        hover:scale-105
        transition
      "
    >
      <FaMicrophone />
      Activate S.H.I.V.A
    </button>
  );
}