"use client";

const data = [
   {
  year: "2026",
  title: "Robotic Software Intern – Simulation & Control Systems",
  subtitle: "NishCorp Technologies LLP | 1 Month Internship",
  desc: "Worked on robot simulation setup and testing using ROS 2, Gazebo, and related tools. Assisted in control system logic for mobile robots, robot kinematics, motion control, debugging, performance optimization, and software-sensor-hardware integration.",
  tags: [
    "ROS 2",
    "Gazebo",
    "Robot Simulation",
    "Control Systems",
    "Kinematics",
    "Robotics Software",
  ],
},


  {
    year: "2025",
    title: "Intern – Saiprasad Enterprises (House of Automation)",
    subtitle: "Pune | 1 Month Industrial Internship",
    desc: "Assisted in mechanical assembly of X-Y linear slide systems used in pick-and-place automation. Worked on mounting linear rails, supports, and actuators with proper alignment. Supported wiring, system preparation, testing, and observed industrial installation and inspection processes.",
    tags: ["Industrial Automation", "X-Y Linear Slides", "Mechanical Assembly",  "Testing"],
  },
  
  {
    year: "2025",
    title: "ROS 2 Autonomous Robotics Development",
    subtitle: "Self Learning & Projects",
    desc: "Developed ROS 2 mobile robot applications with Gazebo, RViz, navigation concepts and computer vision.",
    tags: ["ROS2", "Gazebo", "Computer Vision"],
  },
  {
  year: "2025",
  title: "🤖 e-Yantra CropDrop Bot",
  subtitle: "IIT Bombay Robotics Learning Initiative",
  desc: "Explored autonomous robotics concepts through the e-Yantra CropDrop Bot challenge . Gained exposure to robot navigation, logical problem-solving, and robotics programming fundamentals.",
  tags: [
    "Robot Navigation",
    "Problem Solving",
    "Programming",
    "Autonomous Robotics",
    "Learning Initiative",
  ],
},
  {
  year: "2025",
  title: "Runner-Up – Arduino Innovation Competition",
  subtitle: "Technical Competition",
  desc: "Secured Runner-Up position in an Arduino-based technical competition by designing and developing an innovative embedded system solution using sensors, microcontrollers, and automation concepts.",
  tags: [
    "Arduino",
    "Embedded Systems",
    "Innovation",
    "Sensors",
    "Automation",
  ],
},
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 text-white relative overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold mb-20">
        Experience &{" "}
        <span className="text-purple-400">
          Achievements
        </span>
      </h2>

      <div className="max-w-6xl mx-auto relative">

        {/* Center glowing line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-purple-500/60 -translate-x-1/2 shadow-[0_0_20px_#7c3aed]" />

        {data.map((item, i) => (
          <div
            key={i}
            className={`relative flex mb-20 ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >

            {/* Center node */}
            <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10">
              <div className="w-5 h-5 rounded-full border-4 border-purple-500 bg-[#0b1320] shadow-[0_0_15px_#7c3aed]" />
            </div>

            {/* Card */}
            <div className="w-[45%] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md 
            hover:border-purple-500 hover:shadow-[0_0_30px_#7c3aed] 
            hover:-translate-y-2 transition duration-300">

              {/* Year */}
              <span className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm mb-4">
                📅 {item.year}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              {/* Organization */}
              <p className="text-purple-300 text-sm mt-2">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-400 mt-4 leading-relaxed">
                {item.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}