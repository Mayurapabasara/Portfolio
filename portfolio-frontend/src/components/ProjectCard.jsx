export default function ProjectCard({ project }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition">
      
      <img src={project.image} className="h-48 w-full object-cover" />

      <div className="p-5">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-gray-400 text-sm mt-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs bg-blue-500/20 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}