import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import worksureImg from "../assets/worksure.png";

const projects = [
  {
    title: "WorkSure (FYP)",
    description: "Workflow system using React + Spring Boot",
    image: worksureImg,
    tech: ["React", "Spring Boot", "MySQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "HexaShop",
    description: "Responsive e-commerce frontend design",
    image: worksureImg,
    tech: ["HTML", "CSS", "JS"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-28 px-6 relative">

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-purple-500 blur-[150px] opacity-20 rounded-full left-10 top-10"></div>

      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-blue-400">Projects</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} onClick={setSelected} />
        ))}
      </div>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />

    </section>
  );
}