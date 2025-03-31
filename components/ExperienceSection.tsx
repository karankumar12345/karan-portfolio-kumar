
"use client"
import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
import { FaGithub, FaCode, FaSearch, FaProjectDiagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { Card, CardDescription } from "./ui/card-hover-effect";
import { ColourfulText } from "./ui/ColorFull-Text";
// import GitHubCalendar from "react-github-calendar";
import GitHubStats from "./GithubStats";
import LeetCodeStats from "./LeetcodeState";
// import LeetCodeStats from "./LeetcodeState";
// import StreaksWatchView from "./LeetcodeState";

const ExperienceSection = () => {
  return (
    <section className="py-10 px-5 md:px-20 bg-gray-900" id="Experience">
      <h2 className="text-3xl font-bold text-center mb-6"><ColourfulText text="Experience"/></h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-5 flex gap-4 items-center">
          <FaCode className="text-3xl text-blue-600" />
          <CardDescription>
            <h3 className="text-xl font-semibold"> <ColourfulText text="Problem Solving"/></h3>
            <p>Solved <strong>500+</strong> LeetCode problems, maintaining a <strong>200-day streak</strong>.</p>
          </CardDescription>
        </Card>
        <Card className="p-5 flex gap-4 items-center">
          <FaProjectDiagram className="text-3xl text-green-600" />
          <CardDescription>
            <h3 className="text-xl font-semibold"> <ColourfulText text="Project Development"/></h3>
            <p>Built multiple <strong>full-stack applications</strong> including an AI-powered mock interview system and real-time code editor.</p>
          </CardDescription>
        </Card>
        <Card className="p-5 flex gap-4 items-center">
          <FaSearch className="text-3xl text-yellow-500" />
          <CardDescription>
            <h3 className="text-xl font-semibold"><ColourfulText text="SEO Optimization "/> </h3>
            <p>Implemented SEO strategies to improve search visibility and ranking for web applications.</p>
          </CardDescription>
        </Card>
        <Card className="p-5 flex gap-4 items-center">
          <FaGithub className="text-3xl text-gray-600" />
          <CardDescription>
            <h3 className="text-xl font-semibold"> <ColourfulText text="GitHub Contributions"/></h3>
            <p>Maintained an active GitHub profile with open-source contributions and real-world applications.</p>
            <Link href="https://github.com/karankumar12345" className="text-blue-600 hover:underline">View GitHub</Link>
          </CardDescription>
        </Card>
        <Card className="p-5 flex gap-4 items-center">
          <SiLeetcode className="text-3xl text-orange-500" />
          <CardDescription>
            <h3 className="text-xl font-semibold"> <ColourfulText text="LeetCode Profile"/></h3>
            <p>Demonstrated problem-solving skills through algorithmic challenges.</p>
            <Link href="https://leetcode.com/Karan1_2" className="text-blue-600 hover:underline">View LeetCode</Link>
          </CardDescription>
        </Card>
      </div>
      <div className="mt-[30px]">
      <GitHubStats/>
      {/* <StreaksWatchView/> */}
     
      </div>
      <div className="mt-[30px]">
      <LeetCodeStats/>
      {/* <StreaksWatchView/> */}
     
      </div>


  
  
    </section>
  );
};

export default ExperienceSection;