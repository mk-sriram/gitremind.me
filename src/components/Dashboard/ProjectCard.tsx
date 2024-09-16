import React from "react";
import { UserInfo } from "@/utils/types";
import ContributionsSVG from "@/utils/github/ContributionsSVG";

interface ProjectCardProps {
  project: {
    id: string | number;
    title: string;
    description?: string;
    url?: string;
    contributions?: string[];
  };
  userInfo: UserInfo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, userInfo }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-lg w-[400px] h-[17rem] relative m-5">
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        {project.description && (
          <p className="text-sm mb-2">{project.description}</p>
        )}
        {project.url && (
          <a href={project.url} className="text-blue-500 hover:underline mb-2">
            View on GitHub
          </a>
        )}
        {project.contributions && (
          <div className="mt-auto w-full h-[30rem]">
            <h4 className="text-sm font-semibold mb-1">Contributions</h4>
            <ContributionsSVG contributions={project.contributions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
