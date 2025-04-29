"use client";
import React from "react";
import { FaGithub, FaCode, FaSearch, FaProjectDiagram, FaBuilding } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { Card, CardDescription } from "./ui/card-hover-effect";
import { ColourfulText } from "./ui/ColorFull-Text";
import GitHubStats from "./GithubStats";
import LeetCodeStats from "./LeetcodeState";

const ExperienceSection = () => {
  return (
    <section className="py-12 px-6 md:px-24 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">
        <ColourfulText text="Experience" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
          <FaBuilding className="text-4xl text-purple-500 mb-3" />
          <CardDescription>
            <h3 className="text-xl font-semibold mb-2">
              <ColourfulText text="Okra Datacom" />
            </h3>
            <p className="text-gray-300">
              Worked on the <strong>Clinicva platform</strong>, building a modern
              agent dashboard with real-time features and AI integration for
              healthcare communication systems.
            </p>
            <Link
              href="https://okradatacom.com/"
              className="text-blue-500 hover:underline mt-2"
            >
              Okra Datacom
            </Link>
          </CardDescription>
        </Card>
        <Card className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
          <FaCode className="text-4xl text-blue-500 mb-3" />
          <CardDescription>
            <h3 className="text-xl font-semibold mb-2">
              <ColourfulText text="Problem Solving" />
            </h3>
            <p className="text-gray-300">
              Solved <strong>500+</strong> LeetCode problems, maintaining a{" "}
              <strong>200-day streak</strong>.
            </p>
          </CardDescription>
        </Card>

        <Card className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
          <FaProjectDiagram className="text-4xl text-green-500 mb-3" />
          <CardDescription>
            <h3 className="text-xl font-semibold mb-2">
              <ColourfulText text="Project Development" />
            </h3>
            <p className="text-gray-300">
              Built multiple <strong>full-stack applications</strong> including an
              AI-powered mock interview system and real-time code editor.
            </p>
          </CardDescription>
        </Card>

        <Card className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
          <FaSearch className="text-4xl text-yellow-500 mb-3" />
          <CardDescription>
            <h3 className="text-xl font-semibold mb-2">
              <ColourfulText text="SEO Optimization" />
            </h3>
            <p className="text-gray-300">
              Implemented SEO strategies to improve search visibility and ranking
              for web applications.
            </p>
          </CardDescription>
        </Card>

        <Card className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
          <FaGithub className="text-4xl text-gray-400 mb-3" />
          <CardDescription>
            <h3 className="text-xl font-semibold mb-2">
              <ColourfulText text="GitHub Contributions" />
            </h3>
            <p className="text-gray-300">
              Maintained an active GitHub profile with open-source contributions
              and real-world applications.
            </p>
            <Link
              href="https://github.com/karankumar12345"
              className="text-blue-500 hover:underline mt-2"
            >
              View GitHub
            </Link>
          </CardDescription>
        </Card>

        <Card className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
          <SiLeetcode className="text-4xl text-orange-500 mb-3" />
          <CardDescription>
            <h3 className="text-xl font-semibold mb-2">
              <ColourfulText text="LeetCode Profile" />
            </h3>
            <p className="text-gray-300">
              Demonstrated problem-solving skills through algorithmic challenges.
            </p>
            <Link
              href="https://leetcode.com/Karan1_2"
              className="text-blue-500 hover:underline mt-2"
            >
              View LeetCode
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