export default function Projects() {
  const projects = [
    {
      title: "Line Following Robot",
      type: "Mini Project",
      desc: "Built a robot using IR sensors and STM32 microcontroller. Designed for path-following using sensor-based control logic.",
    },
    {
      title: "Autonomous Mobile Robot",
      type: "ROS2 Project",
      desc: "Developed ROS2 nodes for differential drive navigation. Tested and validated simulations in Gazebo and RViz.",
    },
    {
      title: "Smart Parking System",
      type: "Arduino Based",
      desc: "Designed an Arduino-based parking slot detection system. Implemented logic for automated slot monitoring.",
    },
    {
      title: "Gesture-Controlled TurtleBot3",
      type: "ROS 2 + Computer Vision",
      desc: "Built a hand-gesture recognition system using OpenCV and MediaPipe. Mapped gestures to ROS 2 velocity commands to control TurtleBot3 in Gazebo simulation.",
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 md:px-10 py-20 max-w-6xl mx-auto text-white"
    >
      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-10 text-cyan-400">
        Projects
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-[1.03] transition relative"
          >
            {/* NUMBER BADGE */}
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-cyan-500 text-black flex items-center justify-center font-bold shadow-glow">
              {i + 1}
            </div>

            {/* TYPE */}
            <p className="text-xs text-cyan-300 mb-2">
              {p.type}
            </p>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-2">
              {p.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}