"use client";

import { useState } from "react";
import { FiSettings } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-8 py-5 flex items-center justify-between">

        {/* LEFT BRAND */}
        <div className="text-2xl font-bold text-cyan-300 tracking-wide">
          Shankar<span className="text-white">.dev</span>
        </div>

        {/* LINKS */}
        <div className="flex gap-6 text-sm bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full">
          <a href="#home" className="hover:text-cyan-300 transition">Home</a>
          <a href="#about" className="hover:text-cyan-300 transition">About</a>
          <a href="#skills" className="hover:text-cyan-300 transition">Skills</a>
          <a href="#experience" className="hover:text-cyan-300 transition">Experience</a>
          <a href="#projects" className="hover:text-cyan-300 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
        </div>

        {/* SETTINGS BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:scale-110 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition"
        >
          <FiSettings className="text-cyan-300" size={18} />
        </button>
      </nav>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-50"
        />
      )}

      {/* SETTINGS PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#0b1020] border-l border-white/10 z-50 p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold text-cyan-300 mb-6">
          Settings Panel
        </h2>

        <div className="space-y-4 text-sm text-gray-300">

          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            🎨 Theme: Dark (default)
          </div>

          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            ✨ Effects: Neon Cursor ON
          </div>

          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            🤖 UI Mode: Robotics Interface
          </div>

        </div>
      </div>
    </>
  );
}