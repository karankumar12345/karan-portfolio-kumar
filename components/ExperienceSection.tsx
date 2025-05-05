/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { FaGithub, FaCode, FaSearch, FaProjectDiagram, FaBuilding, FaCalendarAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { Card, CardDescription } from "./ui/card-hover-effect";
import { ColourfulText } from "./ui/ColorFull-Text";
import GitHubStats from "./GithubStats";
import LeetCodeStats from "./LeetcodeState";

const ExperienceSection = () => {
  return (
    <section className="py-12 px-6 md:px-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">
        <ColourfulText text="Experience" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="p-6 flex flex-col items-center md:items-start text-center md:text-left hover:scale-105 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center justify-between w-full mb-4">
            <FaBuilding className="text-4xl text-purple-500 hover:scale-110 transition-transform" />
            <div className="flex items-center text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
              <FaCalendarAlt className="mr-2" />
              <span className="text-sm">Apr 2025 - Present</span>
            </div>
          </div>
          <CardDescription>
            <h3 className="text-xl font-semibold mb-2">
              <ColourfulText text="Okra Datacom" />
            </h3>
            <p className="text-gray-300">
              Worked on the <span className="text-purple-400 font-semibold">Clinicva platform</span>, building a modern
              agent dashboard with real-time features and AI integration for
              healthcare communication systems.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Node.js</span>
            </div>
            <Link
              href="https://okradatacom.com/"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Visit Okra Datacom →
            </Link>
          </CardDescription>
        </Card>

        <Card className="p-6 flex flex-col items-center md:items-start text-center md:text-left hover:scale-105 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
          <FaCode className="text-4xl text-blue-500 mb-3 hover:scale-110 transition-transform" />
          <CardDescription>
            <h3 className="text-xl font-semibold mb-2">
              <ColourfulText text="Problem Solving" />
            </h3>
            <p className="text-gray-300">
              Solved <span className="text-blue-400 font-semibold">500+</span> LeetCode problems, maintaining a{" "}
              <span className="text-blue-400 font-semibold">200-day streak</span>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Algorithms</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Data Structures</span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Problem Solving</span>
            </div>
          </CardDescription>
        </Card>

        <Card className="p-6 flex flex-col items-center md:items-start text-center md:text-left hover:scale-105 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
          <FaProjectDiagram className="text-4xl text-green-500 mb-3 hover:scale-110 transition-transform" />
          <CardDescription>
            <h3 className="text-xl font-semibold mb-2">
              <ColourfulText text="Project Development" />
            </h3>
            <p className="text-gray-300">
              Built multiple <span className="text-green-400 font-semibold">full-stack applications</span> including an
              AI-powered mock interview system and real-time code editor.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Full Stack</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">AI Integration</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Real-time</span>
            </div>
          </CardDescription>
        </Card>

        <Card className="p-6 flex flex-col items-center md:items-start text-center md:text-left hover:scale-105 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
          <FaSearch className="text-4xl text-yellow-500 mb-3 hover:scale-110 transition-transform" />
          <CardDescription>
            <h3 className="text-xl font-semibold mb-2">
              <ColourfulText text="SEO Optimization" />
            </h3>
            <p className="text-gray-300">
              Implemented SEO strategies to improve search visibility and ranking
              for web applications.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">SEO</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Analytics</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Performance</span>
            </div>
          </CardDescription>
        </Card>

        <Card className="p-6 flex flex-col items-center md:items-start text-center md:text-left hover:scale-105 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
          <FaGithub className="text-4xl text-gray-400 mb-3 hover:scale-110 transition-transform" />
          <CardDescription>
            <h3 className="text-xl font-semibold mb-2">
              <ColourfulText text="GitHub Contributions" />
            </h3>
            <p className="text-gray-300">
              Maintained an active GitHub profile with open-source contributions
              and real-world applications.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm">Open Source</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Collaboration</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Version Control</span>
            </div>
            <Link
              href="https://github.com/karankumar12345"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              View GitHub →
            </Link>
          </CardDescription>
        </Card>

        <Card className="p-6 flex flex-col items-center md:items-start text-center md:text-left hover:scale-105 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
          <SiLeetcode className="text-4xl text-orange-500 mb-3 hover:scale-110 transition-transform" />
          <CardDescription>
            <h3 className="text-xl font-semibold mb-2">
              <ColourfulText text="LeetCode Profile" />
            </h3>
            <p className="text-gray-300">
              Demonstrated problem-solving skills through algorithmic challenges.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Algorithms</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Competitive</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Problem Solving</span>
            </div>
            <Link
              href="https://leetcode.com/Karan1_2"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              View LeetCode →
            </Link>
          </CardDescription>
        </Card>
      </div>

      <div className="mt-10">
        <GitHubStats />
      </div>
      <div className="mt-10">
        <LeetCodeStats />
      </div>

      {/* What I Want Section */}
      <div className="mt-16 py-8 border-t border-gray-800">
        <h2 className="text-2xl font-semibold text-center mb-4">
          <ColourfulText text="What I'm Looking For" />
        </h2>
        <p className="text-gray-300 text-center">
          I'm eager to contribute my skills to innovative and challenging
          projects. I'm particularly interested in opportunities that involve:
        </p>
        <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>Building impactful and user-friendly applications.</li>
          <li>Collaborating with passionate and skilled teams.</li>
          <li>Learning and implementing cutting-edge technologies.</li>
          <li>Solving complex problems with creative solutions.</li>
          <li>Contributing to a positive and growth-oriented work environment.</li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;