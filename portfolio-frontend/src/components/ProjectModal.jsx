import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-xl p-6 max-w-lg w-full"
      >
        <img
          src={project.image}
          className="w-full h-52 object-cover rounded mb-4"
        />

        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.description}</p>

        {/* Tech */}
        <div className="flex gap-2 mt-3 flex-wrap">
          {project.tech.map((t, i) => (
            <span key={i} className="bg-gray-200 px-2 py-1 text-xs rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-4">
          <a href={project.github} className="text-blue-600">GitHub</a>
          <a href={project.demo} className="text-green-600">Live Demo</a>
        </div>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </motion.div>

    </div>
  );
}