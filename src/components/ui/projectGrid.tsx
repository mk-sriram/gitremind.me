import ProjectCard from "./projectCard";

const ProjectGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-9 gap-y-[3px] w-full h-full">
      {[...Array(1)].map((_, i) => (
        <ProjectCard />
      ))}
    </div>
  );
};

export default ProjectGrid;
