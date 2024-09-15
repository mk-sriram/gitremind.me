"use client";

import { useEffect, useState } from "react";
const HelpBar = () => {
  const [contributions, setContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchContributions() {
      try {
        const response = await fetch("/api/github-contributions");
        if (!response.ok) {
          throw new Error("Failed to fetch contributions");
        }
        const data = await response.json();
        setContributions(data.contributions);
      } catch (error) {
        console.error("Error fetching contributions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);
  return (
    <>
      <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
        <a className="btn group px-6 py-3 rounded-full mb-4 w-full cursor-pointer active:scale-[0.99] hover:scale-[1.02] transition-transform ease-in-out duration-300 bg-gradient-to-t from-gray-700 to-gray-800 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto">
          <span className="flex justify-center relative gap-x-2 items-center text-white">
            {loading ? (
              <span>loading ... </span>
            ) : (
              <span>{contributions} contributions</span>
            )}
          </span>
        </a>
      </div>
    </>
  );
};

export default HelpBar;
