"use client";

import CountUp from "react-countup";

const stats = [
  {
    number: 4,
    title: "Projects Completed",
    icon: "🤖",
  },
  {
    number: 2,
    title: "Industrial Internships",
    icon: "🏭",
  },
  {
    number: 1,
    title: "Competition Awards",
    icon: "🏆",
  },
  {
    number: 3,
    title: "Technical Events",
    icon: "🚀",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-6 text-white"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-cyan-400 tracking-widest text-sm">
          ROBOTICS STATUS
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Engineering Journey in Numbers
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="
              group
              p-6
              rounded-2xl
              bg-white/5
              border border-white/10
              backdrop-blur-md
              text-center
              hover:border-cyan-400
              hover:shadow-[0_0_25px_#22d3ee]
              hover:-translate-y-2
              transition duration-300
            "
          >
            {/* Icon */}
            <div className="text-4xl mb-3">
              {item.icon}
            </div>

            {/* Number */}
            <h3 className="text-5xl font-bold text-cyan-400">
              <CountUp
                end={item.number}
                duration={2}
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </h3>

            {/* Title */}
            <p className="text-gray-300 mt-3 text-sm">
              {item.title}
            </p>

            {/* Glow line */}
            <div className="
              mt-4
              h-[2px]
              w-0
              bg-cyan-400
              group-hover:w-full
              transition-all duration-500
            " />
          </div>
        ))}

      </div>
    </section>
  );
}