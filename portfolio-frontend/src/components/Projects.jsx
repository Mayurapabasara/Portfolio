import ProjectCard from "./ProjectCard";
import worksureImg from "../assets/worksure.png";

const projects = [
  {
    title: "WorkSure (FYP)",
    description: "Workflow system using React + Spring Boot",
    image: worksureImg,
    tech: ["React", "Spring Boot", "MySQL"]
  }
];

export default function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  );
}