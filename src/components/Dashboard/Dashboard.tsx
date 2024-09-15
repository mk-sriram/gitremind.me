"use client";

import { useState } from "react";
import { UserInfo } from "@/utils/types";
interface DashboardProps {
  userInfo: UserInfo;
}

const Dashboard: React.FC<DashboardProps> = ({ userInfo }) => {
  const [contributions, setContributions] = useState(0);
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
              <div className="relative before:absolute before:inset-0 before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                >
                  <a className="btn group px-6 py-3 rounded-full mb-4 w-full cursor-pointer active:scale-[0.99] hover:scale-[1.02] transition-transform ease-in-out duration-300 bg-gradient-to-t from-gray-700 to-gray-800 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto">
                    <span className="flex justify-center relative gap-x-2 items-center text-white">
                      <span>{contributions} contributions</span>
                    </span>
                  </a>
                </div>
              </div>
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
