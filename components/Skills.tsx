export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-10 py-20 max-w-6xl mx-auto text-white"
    >
      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-10 text-cyan-400">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* ROBOTICS */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold mb-3 text-cyan-300">
            Robotics & Simulation
          </h3>
          <p className="text-gray-300">
            ROS2, SLAM, Navigation Stack, Gazebo, RViz
          </p>
        </div>

        {/* PROGRAMMING */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold mb-3 text-cyan-300">
            Programming & AI
          </h3>
          <p className="text-gray-300">
            Python, C++, OpenCV, MATLAB, Arduino
          </p>
        </div>

        {/* DESIGN */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold mb-3 text-cyan-300">
            Design & CAD Tools
          </h3>
          <p className="text-gray-300">
            Fusion 360, AutoCAD
          </p>
        </div>

        {/* HARDWARE */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold mb-3 text-cyan-300">
            Hardware & Embedded Systems
          </h3>
          <p className="text-gray-300">
            Sensors, Motors, Motor Drivers, Embedded Integration
          </p>
        </div>

      </div>
    </section>
  );
}