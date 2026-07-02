"use client"
import dynamic from "next/dynamic";
import { ColourfulText } from "./ui/ColorFull-Text";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });

const GitHubStats = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-16 relative">
      {/* Subtle background ambient glow */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-32 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center p-6 sm:p-8 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-sm">

        {/* Header Section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
            {/* Clean Git Branch Icon instead of a generic emoji */}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7a3 3 0 100-6 3 3 0 000 6zM8 7v7a4 4 0 004 4h4M16 15a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
            <ColourfulText text="GitHub Contributions" />
          </h2>
        </div>

        {/* Calendar Wrapper with custom scrollbar for mobile responsiveness */}
        <div className="w-full overflow-x-auto pb-2 flex justify-center scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          <div className="min-w-[750px] flex justify-center p-2">
            <GitHubCalendar
              username="karankumar12345"
              // Slightly larger blocks for readability
              blockSize={12}
              blockMargin={4}
              colorScheme="dark"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default GitHubStats;