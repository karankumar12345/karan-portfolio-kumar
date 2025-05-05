"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ColourfulText } from "./ui/ColorFull-Text";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4 sm:px-6 lg:px-8" id="Home">
      {/* Left Side - Text Content */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center lg:ml-[10%] md:items-start space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I&apos;m <ColourfulText text="Karan " />Kumar
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-xl">
            A passionate <ColourfulText text="MERN Stack " />Developer 🚀  
            I build interactive web applications with modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="/karan-resume.pdf"
            download="Karan_Kumar_Resume.pdf"
            className="px-6 py-3 border-2 border-white rounded-lg text-white font-semibold hover:bg-white hover:text-black transition duration-300 text-center"
          >
            <ColourfulText text="Download Resume" />
          </a>

          <a href="mailto:karankumar2004122@gmail.com" className="w-full sm:w-auto">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-6 text-2xl mt-4"
        >
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
        </motion.div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
<div className="relative hidden sm:block">
  <motion.div
    animate={{
      boxShadow: [
        "0 0 0 0 rgba(59, 130, 246, 0.4)",
        "0 0 0 20px rgba(59, 130, 246, 0)",
        "0 0 0 0 rgba(59, 130, 246, 0.4)"
      ]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "loop"
    }}
    className="absolute inset-0 rounded-full"
  />
  <Image
    src="/karankumar.jpg"
    alt="Karan Kumar"
    width={300}
    height={300}
    className="rounded-full border-4 border-blue-500 shadow-lg relative z-10 hover:scale-105 transition-transform duration-300"
  />
</div>

      </motion.div>
    </section>
  );
};

export default HeroSection;
