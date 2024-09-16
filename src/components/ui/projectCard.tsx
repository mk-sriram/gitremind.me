import { UserInfo } from "@/utils/types";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
  };
  userInfo: UserInfo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, userInfo }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow-lg w-[45rem] h-[25rem] ">
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600">Owner: {userInfo.fullName}</p>
    </div>

    <div className="flex flex-col">
    <a href="/settings"></a>
    </div>
    {/* Add more project details here */}
  </div>
);

export default ProjectCard;
