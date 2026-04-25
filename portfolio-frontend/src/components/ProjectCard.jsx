export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
      
      <img
        src={project.image}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">
          {project.title}
        </h3>

        <p className="text-gray-500 text-sm mb-3">
          {project.description}
        </p>

        <div className="flex gap-3 text-sm">
          <a href={project.github} className="text-black">
            GitHub
          </a>
          <a href={project.demo} className="text-gray-500">
            Live
          </a>
        </div>
      </div>
    </div>
  );
}