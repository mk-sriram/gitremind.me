import { useState } from "react";
import { UserInfo } from "@/utils/types";
import { Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
  };
  userInfo: UserInfo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, userInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-lg w-[45rem] h-[25rem] relative">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600">Owner: {userInfo.fullName}</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
              <Settings size={20} />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Project Settings</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p>Project settings content goes here.</p>
              {/* Add more settings content here */}
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col mt-4">
        {/* Add more project details here */}
      </div>
    </div>
  );
};

export default ProjectCard;
