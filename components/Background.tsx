"use client";

import { useEffect, useState } from "react";

type Dot = {
  top: number;
  left: number;
  delay: number;
};

export default function Background() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));

    setDots(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#0b1320] overflow-hidden">

      {/* soft glow blobs */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600 blur-[180px] opacity-20 top-[-120px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500 blur-[180px] opacity-10 bottom-[-120px] right-[-120px]" />

      {/* grid */}
      <svg className="absolute w-full h-full opacity-20">
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* dots (now safe) */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40 animate-pulse"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
}