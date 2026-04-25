import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#020617] border border-white/10 rounded-2xl p-6 max-w-xl w-full"
      >
        <img
          src={project.image}
          className="w-full h-52 object-cover rounded-lg mb-4"
        />

        <h2 className="text-xl font-bold">{project.title}</h2>

        <p className="text-gray-400 mt-2">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs bg-blue-500/20 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-5">
          <a href={project.github} className="text-blue-400">
            GitHub
          </a>
          <a href={project.demo} className="text-green-400">
            Live Demo
          </a>
        </div>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-red-500 rounded"
        >
          Close
        </button>
      </motion.div>

    </div>
  );
}