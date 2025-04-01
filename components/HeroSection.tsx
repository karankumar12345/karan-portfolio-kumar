"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ColourfulText } from "./ui/ColorFull-Text";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";


const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center   justify-center h-screen text-center md:text-left bg-gradient-to-b from-gray-900 to-black text-white px-6" id="Home">
      {/* Left Side - Text Content */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center lg:ml-[15%] md:items-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Hi, I&apos;m <ColourfulText text="Karan " />Kumar
        </h1>
        <p className=" text-lg md:text-xl text-gray-300 mt-4 max-w-xl">
          A passionate <ColourfulText text="MERN Stack " />Developer 🚀  
          I build interactive web applications with modern technologies.
        </p>
        <div className="mt-6 flex space-x-4 mb-3">
          
          <a
            href="/karan-resume.pdf"
            download="Karan_Kumar_Resume.pdf"
            className="px-6 py-3 border-2 border-white rounded-lg text-white font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            <ColourfulText text="Download Resume" />
          </a>

        </div>
        <a href="mailto:karankumar2004122@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/karankumar.jpg" // Ensure this image is placed in the public folder
          alt="Karan Kumar"
          width={300} // Adjust size accordingly
          height={300}
          className="rounded-full border-4 border-blue-500 shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
