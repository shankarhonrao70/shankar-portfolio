"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setAngle((prev) => prev + 0.2);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* core node */}
      <div className="w-2.5 h-2.5 bg-cyan-300 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

      {/* orbit particles */}
      {[0, 1, 2, 3].map((i) => {
        const offset = (i * Math.PI * 2) / 4;

        return (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-80"
            style={{
              top: Math.sin(angle + offset) * 10,
              left: Math.cos(angle + offset) * 10,
              transition: "top 0.08s linear, left 0.08s linear",
              boxShadow: "0 0 8px rgba(168,85,247,0.8)",
            }}
          />
        );
      })}
    </div>
  );
}