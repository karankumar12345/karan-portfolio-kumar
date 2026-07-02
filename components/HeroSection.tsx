"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ColourfulText } from "./ui/ColorFull-Text";
import { FaGithub, FaLinkedin, FaCode, FaDownload } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="relative flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6 lg:px-10"
      id="Home"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          className="space-y-7"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-200">
            Full Stack Engineer | Real-Time Systems & WebRTC
          </span>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Architecting scalable platforms with <ColourfulText text="sub-100ms real-time delivery" />
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            I am Karan Kumar. I build production-grade telecom pipelines, secure multi-tenant SaaS matrices, and high-throughput systems that turn intensive, event-driven requirements into seamless user experiences.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:karankumar2004122@gmail.com"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Hire Me
            </a>
            <a
              href="/Karan_Kumar_Full_Stack_Developer_Resume.pdf"
              download="Karan_Kumar_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-5 text-2xl text-slate-300">
            <a href="https://github.com/karankumar12345" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110 hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/karan-kumar-823190256/" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/Karan1_2" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110 hover:text-white">
              <FaCode />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-cyan-500/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/70 p-4 backdrop-blur-md">
              <Image
                src="/karan-insta-pic.jpeg"
                alt="Karan Kumar"
                width={420}
                height={420}
                className="h-[280px] w-[280px] rounded-2xl object-cover sm:h-[360px] sm:w-[360px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;