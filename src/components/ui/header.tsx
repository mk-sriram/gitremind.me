"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { useUserInfo, handleSignOut } from "@/utils/supabase/useAuth";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const { userInfo, loading } = useUserInfo();
  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="fixed mt-4 top-2 z-30 w-full md:top-6">
      <div className="mx-auto w-[80%] px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-4 shadow-sm">
          {/* Site branding */}

          <a href="\" className="flex flex-1 items-center">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="Picture of the author"
            />
            <span className="font-medium"> GitRemind </span>
          </a>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center font-medium justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm px-3 py-2 rounded-xl text-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-100"
              >
                Demo
              </Link>
            </li>
            <li>
              {!userInfo.email ? (
                <button className="btn-sm cusor-pointer px-3 py-2 rounded-xl text-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-100">
                  Login
                </button>
              ) : (
                <button
                  onClick={handleSignOut}
                  className="btn-sm cusor-pointer px-3 py-2 rounded-xl text-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-100"
                >
                  Sign Out
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
