"use client";

import { useEffect, useState } from "react";
import ProjectGrid from "./ProjectGrid";
import { UserInfo } from "@/utils/types";
import HelpBar from "./HelpBar";
interface DashboardProps {
  userInfo: UserInfo;
}

const Dashboard: React.FC<DashboardProps> = ({ userInfo }) => {
  console.log("dashboard", userInfo);
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center py-6 px-4 bg-white w-[100%] ">
      <div className="pb-12 md:pb-20">
        <div className="flex flex-col justify-center pb-12 text-center mt-[150px] md:pb-16">
          <h1 className="mb-6  text-gray-900 text-2xl font-semibold md:text-5xl">
            Good morning, {userInfo.fullName}
          </h1>
          <div className="mx-auto max-w-3xl">
            <HelpBar />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <ProjectGrid userInfo={userInfo} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
