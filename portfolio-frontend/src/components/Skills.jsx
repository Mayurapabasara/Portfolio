import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-purple-500",
    skills: [
      { name: "React", level: 90 },
      { name: "Tailwind", level: 85 },
    ],
  },
  {
    title: "Backend",
    color: "from-green-500 to-teal-500",
    skills: [
      { name: "Spring Boot", level: 80 },
      { name: "Node.js", level: 50 },
      { name: "Node.js", level: 50 },
      { name: "Node.js", level: 50 }
    ],
  },
  {
    title: "Database",
    color: "from-pink-500 to-red-500",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 70 },
      { name: "Supabase", level: 70 }
    ],
  },
  {
    title: "Tools",
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 10 },
      { name: "Node.js", level: 50 },
      { name: "Node.js", level: 50 },
      { name: "Node.js", level: 50 },
      { name: "Node.js", level: 50 }
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">

      {/* Glow Background */}
      <div className="absolute w-96 h-96 bg-blue-500 blur-[150px] opacity-20 rounded-full right-10 top-10"></div>

      <h2 className="text-4xl font-bold text-center mb-16">
        Technical <span className="text-blue-400">Skills</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:scale-105 transition"
          >

            {/* Category Title */}
            <h3 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
              {cat.title}
            </h3>

            {/* Skills */}
            <div className="space-y-4">
              {cat.skills.map((skill, idx) => (
                <div key={idx}>
                  
                  {/* Name */}
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className={`h-full bg-gradient-to-r ${cat.color}`}
                    />
                  </div>

                </div>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

      {/* 🚀 Bottom Highlight Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-center"
      >
        <h3 className="text-2xl font-bold mb-2">
          Always Learning 🚀
        </h3>
        <p className="text-gray-200">
          I continuously explore new technologies and improve my skills to build high-quality modern applications.
        </p>
      </motion.div>

    </section>
  );
}