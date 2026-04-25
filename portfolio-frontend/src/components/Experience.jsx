import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import ruhunaLogo from "../assets/ruhuna.jpg"; // add your logo
import hackathonLogo from "../assets/hackathon.jpg"; // optional

const experiences = [
  {
    role: "Batch Representative",
    org: "University of Ruhuna",
    period: "2025 – Present",
    description:
      "Representing the Computer Science batch, coordinating events and acting as a bridge between students and faculty.",
    skills: ["Leadership", "Communication", "Event Management"],
    logo: ruhunaLogo,
    featured: true, // ⭐ highlight this
  },
  {
    role: "Hackathon Participant",
    org: "InsurgeX 2024",
    period: "2024",
    description:
      "Worked in a team to develop innovative solutions under time pressure.",
    skills: ["Problem Solving", "Teamwork"],
    logo: hackathonLogo,
  },
];

export default function Experience() {
  const ref = useRef(null);

  // Scroll progress line
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="experience" className="py-28 px-6 relative">

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-purple-500 blur-[150px] opacity-20 rounded-full left-10 top-10"></div>

      <h2 className="text-4xl font-bold text-center mb-16">
        Experience & <span className="text-blue-400">Leadership</span>
      </h2>

      <div ref={ref} className="max-w-4xl mx-auto relative">

        {/* 🔥 Animated Timeline Line */}
        <div className="absolute left-6 top-0 w-[2px] h-full bg-white/10">
          <motion.div
            style={{ scaleY }}
            className="w-full bg-blue-500 origin-top h-full"
          />
        </div>

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="mb-12 ml-16 relative"
          >

            {/* Dot */}
            <div className="absolute -left-10 top-4 w-5 h-5 bg-blue-500 rounded-full shadow-lg"></div>

            {/* Card */}
            <div
              className={`p-6 rounded-2xl border ${
                exp.featured
                  ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500"
                  : "bg-white/5 border-white/10"
              } hover:scale-[1.02] transition`}
            >

              {/* Header */}
              <div className="flex items-center gap-4 mb-3">

                {/* Logo */}
                <img
                  src={exp.logo}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-blue-400 text-sm">
                    {exp.org} • {exp.period}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm">
                {exp.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-blue-500/20 px-2 py-1 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* ⭐ Featured Badge */}
              {exp.featured && (
                <div className="mt-4 inline-block px-3 py-1 text-xs bg-blue-600 rounded">
                  ⭐ Featured Experience
                </div>
              )}

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}