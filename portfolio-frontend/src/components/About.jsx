import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">

      {/* Glow Background */}
      <div className="absolute w-96 h-96 bg-purple-500 blur-[150px] opacity-20 rounded-full left-10 top-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I’m a <span className="text-white font-semibold">Computer Science undergraduate</span> 
            at the University of Ruhuna, passionate about building scalable and efficient 
            full-stack applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            I specialize in <span className="text-blue-400">React, Spring Boot, and REST APIs</span>, 
            focusing on creating responsive user interfaces and robust backend systems.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Currently seeking a{" "}
            <span className="text-green-400 font-semibold">
              Software Engineering Internship
            </span>{" "}
            to gain real-world experience and contribute to impactful projects.
          </p>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-lg"
        >

          <h3 className="text-xl font-semibold mb-6 text-blue-400">
            Quick Info
          </h3>

          <div className="space-y-4 text-gray-300 text-sm">
            <p>🎓 University: University of Ruhuna</p>
            <p>💻 Focus: Full Stack Development</p>
            <p>⚙️ Tech: React, Spring Boot, MySQL</p>
            <p>📍 Location: Sri Lanka</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div>
              <h4 className="text-2xl font-bold text-blue-400">3+</h4>
              <p className="text-xs text-gray-400">Projects</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-purple-400">2+</h4>
              <p className="text-xs text-gray-400">Technologies</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-green-400">1+</h4>
              <p className="text-xs text-gray-400">Experience</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}