import React, { useEffect, useState } from "react";
import { UserInfo } from "@/utils/types";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  userInfo: UserInfo;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ userInfo }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/github-data");
        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }
        const data = await response.json();
        const formattedData = data.map((repo) => ({
          id: repo.name,
          title: repo.name,
          description: repo.description,
          url: repo.url,
          contributions: repo.defaultBranchRef.target.history.nodes.map(
            (node) => node.committedDate
          ),
        }));
        setProjects(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-2 gap-10   w-[120%] h-full">
      {projects.map((project, id) => (
        <ProjectCard key={id} project={project} userInfo={userInfo} />
      ))}
    </div>
  );
};

export default ProjectGrid;
