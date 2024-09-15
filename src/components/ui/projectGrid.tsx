import { UserInfo } from "@/utils/types";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  userInfo: UserInfo;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ userInfo }) => {
  // This is just a placeholder. In a real application, you'd probably fetch projects from an API
  const projects = [
    { id: 1, title: "Project 1" },
    { id: 2, title: "Project 2" },
    { id: 3, title: "Project 3" },
    { id: 4, title: "Project 4" },
  ];

  return (
    <div className="grid grid-cols-2 gap-10 w-full h-full">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} userInfo={userInfo} />
      ))}
    </div>
  );
};

export default ProjectGrid;
