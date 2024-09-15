"use client";

import { useEffect, useState } from "react";
import { UserInfo } from "@/utils/types";
import HelpBar from "./HelpBar";
interface DashboardProps {
  userInfo: UserInfo;
}

const Dashboard: React.FC<DashboardProps> = ({ userInfo }) => {

  console.log("dashboard", userInfo);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 bg-white w-[100%] ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            ></div>
            <h1
              className="mb-6 text-gray-900 text-2xl font-semibold md:text-5xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Good morning, {userInfo.fullName}
            </h1>
            <div className="mx-auto max-w-3xl">
              <HelpBar />
            </div>
          </div>
          <div className="flex justify-center mx-auto w-full">
            <div className="relative aspect-video w-[100rem] rounded-2xl bg-gray-100 px-5 py-3 shadow-xl ">
              wassup
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
