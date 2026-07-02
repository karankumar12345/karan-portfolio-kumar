"use client";
import React from "react";
import { FaGithub, FaCode, FaBuilding, FaCalendarAlt, FaPhoneAlt, FaShieldAlt, FaServer } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { Card, CardDescription } from "./ui/card-hover-effect";
import { ColourfulText } from "./ui/ColorFull-Text";
import GitHubStats from "./GithubStats";

const ExperienceSection = () => {
  return (
    <section id="Experience" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center text-4xl font-bold">
          <ColourfulText text="Experience & Impact" />
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-slate-300">
          Professional experience and measurable outcomes aligned with your resume.
        </p>

        <Card className="mb-8 border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wider text-slate-300">Full Stack Developer</p>
              <h3 className="mt-1 text-2xl font-bold text-white">OD3X / CX Assist Ltd</h3>
              <p className="text-sm text-slate-400">AI-Powered Healthcare Communication Platform | London, UK (Remote)</p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
              <FaCalendarAlt />
              Apr 2025 - Present
            </div>
          </div>

          <CardDescription className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/25 p-4">
              <div className="mb-2 flex items-center gap-2 text-emerald-300"><FaServer /> High-Scale Architecture</div>
              <p className="text-sm text-slate-300">Scaled telephony infrastructure from 0 to 30,000+ monthly calls while maintaining sub-100ms UI responsiveness and 99.9% uptime.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/25 p-4">
              <div className="mb-2 flex items-center gap-2 text-blue-300"><FaPhoneAlt /> WebRTC Telephony</div>
              <p className="text-sm text-slate-300">Built browser softphone architecture using JsSIP, WebRTC, and Asterisk PBX with SIP signaling, STUN/TURN, IVR flows, transfers, and recording workflows.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/25 p-4">
              <div className="mb-2 flex items-center gap-2 text-yellow-300"><FaShieldAlt /> Security & Isolation</div>
              <p className="text-sm text-slate-300">Engineered multi-tenant data isolation and hierarchical RBAC architecture for secure clinic-level sandboxing.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/25 p-4">
              <div className="mb-2 flex items-center gap-2 text-cyan-300"><FaBuilding /> Real-Time State Sync</div>
              <p className="text-sm text-slate-300">Replaced heavy polling with Redis Pub/Sub + WebSockets for low-overhead event broadcasting across 20+ active clinic setups.</p>
            </div>
          </CardDescription>

          <div className="mt-5 flex flex-wrap gap-2">
            {["React.js", "Next.js", "Node.js", "TypeScript", "WebRTC", "Asterisk PBX", "Redis", "RBAC", "Vapi AI"].map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
                {tag}
              </span>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <FaCode className="mb-3 text-3xl text-blue-400" />
            <CardDescription>
              <h3 className="mb-2 text-xl font-semibold text-white">
                <ColourfulText text="Algorithmic Excellence" />
              </h3>
              <p className="text-gray-300">
                Solved <span className="font-semibold text-blue-300">500+</span> DSA problems with strong focus on graphs, dynamic programming, and system design thinking.
              </p>
            </CardDescription>
          </Card>

          <Card className="border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <FaGithub className="mb-3 text-3xl text-slate-300" />
            <CardDescription>
              <h3 className="mb-2 text-xl font-semibold text-white">
                <ColourfulText text="Product Ownership" />
              </h3>
              <p className="text-gray-300">
                Core engineer delivering production-grade real-time tooling used daily by professional teams under high-volume operational scenarios.
              </p>
              <Link
                href="https://github.com/karankumar12345"
                className="mt-4 inline-block text-blue-400 transition-colors duration-300 hover:text-blue-300"
              >
                View GitHub →
              </Link>
            </CardDescription>
          </Card>

          <Card className="border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <SiLeetcode className="mb-3 text-3xl text-orange-400" />
            <CardDescription>
              <h3 className="mb-2 text-xl font-semibold text-white">
                <ColourfulText text="LeetCode Profile" />
              </h3>
              <p className="text-gray-300">
                Competitive and consistent coding profile showing strong algorithmic discipline and continuous improvement.
              </p>
              <Link
                href="https://leetcode.com/Karan1_2"
                className="mt-4 inline-block text-blue-400 transition-colors duration-300 hover:text-blue-300"
              >
                View LeetCode →
              </Link>
            </CardDescription>
          </Card>
        </div>

        <div className="mt-10">
          <GitHubStats />
        </div>
        {/* <div className="mt-10">
        <LeetCodeStats />
      </div> */}
        <div className="mt-24 py-12 border-t border-white/10 relative overflow-hidden">
          {/* Optional: Subtle background glow for a modern tech aesthetic */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center tracking-tight mb-3">
              <ColourfulText text="Current Focus" />
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-12">
              I am looking to contribute to forward-thinking teams where I can architect high-throughput systems, real-time engines, and bulletproof security infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                    {/* Replace with your icon of choice, e.g., Lucide Zap/Cpu */}
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">High-Scale Full Stack</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Engineering high-throughput, distributed web systems tied to measurable performance targets and seamless user experiences.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                    {/* Replace with your icon, e.g., Lucide Activity/RefreshCw */}
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.253 8H18" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Real-Time Engines</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Architecting low-latency communication networks utilizing WebRTC, WebSockets, and robust event-driven patterns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                    {/* Replace with your icon, e.g., Lucide Shield */}
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Secure Infrastructure</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Implementing hardened architectures featuring advanced authentication protocols, rigorous RBAC, and strict data isolation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl group-hover:bg-amber-500/20 transition-colors">
                    {/* Replace with your icon, e.g., Lucide Users */}
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">High-Impact Culture</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Thriving within collaborative, engineering-first teams that champion extreme ownership, code quality, and fast shipping loops.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;