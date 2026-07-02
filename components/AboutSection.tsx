"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ColourfulText } from "./ui/ColorFull-Text";
import { FaDownload } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl md:text-5xl">
            About <ColourfulText text="Me" /> & My Approach
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-300 sm:text-base">
            I architect mission-critical communication layers, secure multi-tenant backends, and low-latency systems engineered to handle real user traffic under heavy load.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[300px_1fr]">
          <motion.div
            className="relative mx-auto h-60 w-60 sm:h-72 sm:w-72"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl" />
            <div className="absolute inset-2 overflow-hidden rounded-3xl border border-white/15">
              <Image
                src="/karan-insta-pic.jpeg"
                alt="Karan Kumar"
                width={320}
                height={320}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                Hi! I&apos;m <ColourfulText text="Karan Kumar" />, a Full Stack Engineer specialized in building high-scale production apps using <ColourfulText text="Next.js, TypeScript, Node.js, and Redis" />. Currently, I engineer real-time healthcare telephony platforms scaling to <ColourfulText text="30,000+ monthly calls" /> with sub-100ms state responsiveness.
              </p>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                My core expertise lies in bridging communication protocols like <ColourfulText text="WebRTC, JsSIP, and Asterisk PBX" /> alongside production-grade security patterns like strict multi-device session handling, advanced RBAC models, and data isolation layers.
              </p>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                Backed by deep algorithmic discipline with <ColourfulText text="500+ LeetCode solutions" /> focused on Dynamic Programming and Advanced Graphs, I focus on system bottlenecks, memory optimizations, and writing predictable, highly maintainable code.
              </p>
            </div>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <a
                href="/Karan_Kumar_Full_Stack_Developer_Resume.pdf"
                download="Karan_Kumar_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-500"
              >
                <FaDownload />
                Download Resume
              </a>
              <a
                href="mailto:karankumar2004122@gmail.com"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Let&apos;s Collaborate
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;