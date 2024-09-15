"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { createClient } from "@/utils/supabase/client";
import { useUserInfo } from "@/utils/supabase/useAuth";

interface AnimatedSquareProps {
  delay: number;
  color: string;
}

const AnimatedSquare: React.FC<AnimatedSquareProps> = ({ delay, color }) => (
  <div
    className={`w-12 h-12 rounded-sm ${color} animate-pulse`}
    style={{
      animationDelay: `${delay}s`,
    }}
  />
);

const SquareGrid: React.FC<{ className?: string }> = ({ className = "" }) => {
  const colors: string[] = [
    "bg-green-50 bg-opacity-60",
    "bg-green-100 bg-opacity-90",
    "bg-green-200 bg-opacity-20",
    "bg-green-300 bg-opacity-50",
    "bg-green-400 bg-opacity-50",
    "bg-green-500 bg-opacity-50",
    "bg-green-600 bg-opacity-50",
    "bg-green-700 bg-opacity-50",
    "bg-green-800 bg-opacity-50",
  ];

  return (
    <div className={`grid grid-cols-9 grid-rows-9 gap-4 ${className}`}>
      {[...Array(81)].map((_, i) => (
        <AnimatedSquare
          key={i}
          delay={(i * 0.3) % 2}
          color={colors[Math.floor(Math.random() * colors.length)]}
        />
      ))}
    </div>
  );
};

export default function HeroHome() {
  const supabase = createClient();
  const { userInfo, loading } = useUserInfo();
  console.log("HERO", userInfo);
  const handleSignIn = async () => {
    console.log("SIGNING IN BUTTON GOOGLE CLICKED");
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `http://localhost:3000/api/auth/callback`,
      },
    });
  };
  return (
    <section className=" flex justify-center  ">
      <div className=" justify-center w-full max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40w-full ">
          {/* Section header */}
          <div className="pb-12 mt-5  text-center md:pb-16">
            <div
              className="mb-6  [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            ></div>
            <h1
              className="mb-6 mt-3text-gray-900 text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              <span className=" text-green-600 "> GitRemind: </span>
              Commit Today,
              <br className="max-lg:hidden" />
              Remember Tomorrow
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg  text-gray-700 font-medium"
                data-aos="zoom-y-out"
              >
                notification system powered by AI to help you stay on top of
                your project contributions. Never miss a commit again.
              </p>
              <div className="relative before:absolute before:inset-0 before: before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                >
                  {!userInfo.email ? (
                    <a
                      className="btn group px-6 py-3 rounded-full mb-4 w-full cursor-pointer active:scale-[0.99] hover:scale-[1.02] transition-transform ease-in-out duration-300 bg-gradient-to-t from-gray-700 to-gray-900 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                      onClick={handleSignIn}
                    >
                      <span className="flex justify-center relative gap-x-2 items-center text-">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                        </svg>
                        Sign in with Github
                      </span>
                    </a>
                  ) : (
                    <a
                      className="btn group px-6 py-3 rounded-full mb-4 w-full cursor-pointer active:scale-[0.99] hover:scale-[1.02] transition-transform ease-in-out duration-300 bg-gradient-to-t from-green-600 to-green-700 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                      href="\dashboard"
                    >
                      <span className="flex justify-center relative gap-x-2 items-center text-">
                        Open Dashboard
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className=" flex  justify-center w-[">
            <div className="absolute left-0 right-0 flex justify-center">
              <div className="flex items-center">
                <div className=" justify-space w-[30vw] h-full mt-[100px]">
                  <SquareGrid />
                </div>
                <div className="relative aspect-video w-[80rem] rounded-2xl bg-gray-100 px-5 py-3 shadow-xl z-10">
                  wassup
                </div>
                <div className="justify-center w-[30vw] h-full mt-[100px]">
                  <SquareGrid />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
