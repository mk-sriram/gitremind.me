import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { UserInfo } from "@/utils/types";

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    fullName: null,
    email: null,
  });
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        if (error) throw error;

        setUserInfo({
          fullName: user?.user_metadata?.full_name || null,
          email: user?.email || null,
        });
      } catch (error) {
        console.error("Error fetching user info:", error);
      } finally {
        setLoading(false);
      }
    };

    getUserInfo();
  }, []);

  return { userInfo, loading };
};

export const handleSignOut = async () => {
  console.log("signoutCalled");
  const supabase = createClient();
  try {
    await supabase.auth.signOut();
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
