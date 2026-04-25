import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={() => onClick(project)}
      className="relative cursor-pointer group bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>

      {/* Image */}
      <img
        src={project.image}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-5 relative z-10">
        <h3 className="text-lg font-semibold">{project.title}</h3>

        <p className="text-gray-400 text-sm mt-2">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-blue-500/20 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}