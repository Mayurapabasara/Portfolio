import { motion } from "framer-motion";

const education = [
  {
    title: "Bachelor of Computer Science",
    place: "University of Ruhuna",
    year: "2023 – Present",
    details: "Expected Graduation: 2027 | GPA: 2.50",
  },
  {
    title: "Diploma in Information & Communication Technology",
    place: "ICBT Campus – Kurunegala",
    year: "2022",
  },
  {
    title: "Diploma in English",
    place: "ICBT Campus – Kurunegala",
    year: "2022",
  },
  {
    title: "GCE Advanced Level (Physical Science)",
    place: "Maliyadeva Model College",
    year: "2021",
    details: "Combined Maths: A | Physics: B | Chemistry: C",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 relative">

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-blue-500 blur-[150px] opacity-20 rounded-full right-10 top-10"></div>

      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-blue-400">Education</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition"
          >
            <h3 className="text-lg font-semibold">{edu.title}</h3>
            <p className="text-blue-400 text-sm">{edu.place}</p>
            <p className="text-gray-400 text-sm">{edu.year}</p>

            {edu.details && (
              <p className="text-gray-300 text-sm mt-2">{edu.details}</p>
            )}
          </motion.div>
        ))}

      </div>
    </section>
  );
}