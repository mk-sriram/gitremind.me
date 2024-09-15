"use client";

import { useUserInfo } from "@/utils/supabase/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "@/components/Dashboard/Dashboard"; // Assuming Dashboard is in the same directory

const DashboardPage = () => {
  const { userInfo, loading } = useUserInfo();
  const router = useRouter();
  console.log("dashboard", userInfo);
  useEffect(() => {
    if (!loading && !userInfo.fullName) {
      router.push("/");
    }
  }, [userInfo, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // Or a more sophisticated loading component
  }

  if (!userInfo.fullName) {
    return null; // This will prevent any flash of content before redirect
  }

  return <Dashboard userInfo={userInfo} />;
};

export default DashboardPage;
