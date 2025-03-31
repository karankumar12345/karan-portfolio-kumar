
"use client"
import dynamic from "next/dynamic";
const GitHubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });
// import LeetCodeCalendar from 'leetcode-calendar';
import { ColourfulText } from "./ui/ColorFull-Text";

const GitHubStats = () => {
  return (
    <div className=" flex items-center justify-center flex-col text-white">
      <h2 className="mt-[20px] mb-[20px] text-2xl ">📈 <ColourfulText text=" GitHub Contributions"/></h2>
      <GitHubCalendar 
        username="karankumar12345" 
        blockSize={10} 
        blockMargin={4} 
        colorScheme="dark"
      />
        
    </div>
  );
};

export default GitHubStats;
