"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ColourfulText } from "./ui/ColorFull-Text";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - Profile Image */}
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/karankumar.jpg"
            alt="Karan Kumar"
            width={320}
            height={320}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side - About Me Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold">
            About <ColourfulText text="Me" />
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            Hi! I&apos;m <ColourfulText text="Karan Kumar" />, a passionate{" "}
            <ColourfulText text="MERN Stack Developer" /> with a deep love for creating 
            scalable, high-performance web applications. I specialize in building interactive 
            user experiences using modern technologies like <ColourfulText text="React, Next.js, Node.js, MongoDB, Express.js" /> and more.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            🚀 In addition to development, I am highly skilled in <ColourfulText text="Data Structures & Algorithms (DSA)" />.
            I have solved <ColourfulText text="500+ problems on LeetCode" />, focusing on optimizing 
            solutions for time and space complexity. Problem-solving is a core part of my mindset!
          </p>
          <p className="text-lg text-gray-300 mt-4">
            I am always eager to learn, collaborate, and take on new challenges. Whether it&apos;s 
            developing **<ColourfulText text="real-time applications" />**, working with **<ColourfulText text="AI integrations" />**, or crafting  
            **<ColourfulText text="real-time applications" />**, I love turning ideas into reality.
          </p>
          
          <div className="mt-6">
            <a
              href="/karan-resume.pdf"
              download="Karan_Kumar_Resume.pdf"
              className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300"
            >
              Download Resume
            </a>
          </div>
          
          {/* Social Links */}
          <div className="mt-6 flex justify-center md:justify-start gap-6 text-2xl">
            <a href="https://github.com/karankumar12345" target="_blank" className="text-gray-300 hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/karan-kumar-823190256/" target="_blank" className="text-gray-300 hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/Karan1_2" target="_blank" className="text-gray-300 hover:text-white transition">
              <FaCode />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
