import { motion } from "framer-motion";
import { useState } from "react";

import javaImg from "../assets/certificates/javaImg.png";
import springImg from "../assets/certificates/springImg.png";
import hackathonImg from "../assets/certificates/hackathonImg.png";

const certificates = [
  {
    title: "Java Programming",
    org: "BOORD INFINITY",
    image: javaImg,
    link: "https://coursera.org/your-link",
    type: "Coursera",
    description: "Fundamentals of Java programming and object-oriented concepts.",
    skills: ["OOP", "Java Basics", "Data Structures"],
  },
  {
    title: "Spring Boot & REST",
    org: "LearnQuest",
    image: springImg,
    link: "https://coursera.org/your-link",
    type: "Coursera",
    description: "Building REST APIs using Spring Boot and MVC architecture.",
    skills: ["Spring Boot", "REST API", "Backend Development"],
  },
  {
    title: "InsurgeX Hackathon",
    org: "University of Ruhuna",
    image: hackathonImg,
    link: "https://linkedin.com/your-post",
    type: "LinkedIn",
    description: "Participated in a competitive hackathon solving real-world problems.",
    skills: ["Teamwork", "Problem Solving", "Rapid Development"],
  },
  {
    title: "Java Programming",
    org: "BOORD INFINITY",
    image: javaImg,
    link: "https://coursera.org/your-link",
    type: "Coursera",
    description: "Fundamentals of Java programming and object-oriented concepts.",
    skills: ["OOP", "Java Basics", "Data Structures"],
  },
  {
    title: "Java Programming",
    org: "BOORD INFINITY",
    image: javaImg,
    link: "https://coursera.org/your-link",
    type: "Coursera",
    description: "Fundamentals of Java programming and object-oriented concepts.",
    skills: ["OOP", "Java Basics", "Data Structures"],
  },
  {
    title: "Java Programming",
    org: "BOORD INFINITY",
    image: javaImg,
    link: "https://coursera.org/your-link",
    type: "Coursera",
    description: "Fundamentals of Java programming and object-oriented concepts.",
    skills: ["OOP", "Java Basics", "Data Structures"],
  }
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="py-28 px-6 relative">

      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-blue-400">Certificates</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden"
          >

            {/* Image */}
            <img
              src={cert.image}
              className="h-48 w-full object-cover cursor-pointer"
              onClick={() => setSelected(cert)}
            />

            {/* Badge */}
            <div className="absolute top-2 left-2 px-3 py-1 text-xs rounded-full bg-black/70">
              {cert.type === "Coursera" && "🎓 Coursera"}
              {cert.type === "LinkedIn" && "💼 LinkedIn"}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-sm font-semibold">{cert.title}</h3>
              <p className="text-xs text-gray-400">{cert.org}</p>

              {/* Description */}
              <p className="text-xs text-gray-300 mt-2 line-clamp-2">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-2">
                {cert.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-blue-500/20 px-2 py-1 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* 🔍 MODAL (FULL DETAILS) */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#020617] p-6 rounded-xl max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              className="w-full max-h-[300px] object-contain rounded"
            />

            <h3 className="mt-4 text-lg font-semibold">
              {selected.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {selected.org}
            </p>

            {/* Description */}
            <p className="text-gray-300 mt-3 text-sm">
              {selected.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-3">
              {selected.skills.map((s, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-500/20 px-2 py-1 rounded"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={selected.link}
              target="_blank"
              className="inline-block mt-4 text-blue-400"
            >
              Verify Certificate →
            </a>

          </motion.div>
        </div>
      )}

    </section>
  );
}