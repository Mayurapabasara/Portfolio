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
    title: "WorkSure (FYP)",
    description: "Workflow system using React + Spring Boot",
    image: worksureImg,
    tech: ["React", "Spring Boot", "MySQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "WorkSure (FYP)",
    description: "Workflow system using React + Spring Boot",
    image: worksureImg,
    tech: ["React", "Spring Boot", "MySQL"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        My {`{dev}`} Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} onClick={setSelected} />
        ))}
      </div>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />

    </section>
  );
}