"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ColourfulText } from "./ui/ColorFull-Text";
import { FaGithub, FaLinkedin, FaCode, FaDownload } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            About <ColourfulText text="Me" />
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Profile Image */}
          <motion.div
            className="w-64 h-64 md:w-80 md:h-80 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/20">
              <Image
                src="/karankumar.jpg"
                alt="Karan Kumar"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - About Me Text */}
          <motion.div
            className="flex-1 text-center md:text-left space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi! I&apos;m <ColourfulText text="Karan Kumar" />, a passionate{" "}
                <ColourfulText text="MERN Stack Developer" /> with a deep love for creating 
                scalable, high-performance web applications. I specialize in building interactive 
                user experiences using modern technologies like <ColourfulText text="React, Next.js, Node.js, MongoDB, Express.js" /> and more.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                🚀 In addition to development, I am highly skilled in <ColourfulText text="Data Structures & Algorithms (DSA)" />.
                I have solved <ColourfulText text="500+ problems on LeetCode" />, focusing on optimizing 
                solutions for time and space complexity. Problem-solving is a core part of my mindset!
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I am always eager to learn, collaborate, and take on new challenges. Whether it&apos;s 
                developing <ColourfulText text="real-time applications" />, working with <ColourfulText text="AI integrations" />, or crafting  
                <ColourfulText text="scalable solutions" />, I love turning ideas into reality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/karan-resume.pdf"
                download="Karan_Kumar_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 text-2xl">
              <a 
                href="https://github.com/karankumar12345" 
                target="_blank" 
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/karan-kumar-823190256/" 
                target="_blank" 
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://leetcode.com/Karan1_2" 
                target="_blank" 
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <FaCode />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
