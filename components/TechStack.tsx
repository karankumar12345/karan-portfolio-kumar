"use client";
import { motion } from "framer-motion";
import { ColourfulText } from "./ui/ColorFull-Text";

import { 
  IconBrandReact, 
  IconBrandNodejs, 
  IconBrandMongodb, 
  IconBrandNextjs, 
  IconBrandTypescript, 
  IconBrandTailwind, 
  IconBrandDocker, 
  IconBrandAws, 
  IconBrandFirebase, 
  IconBrandGit, 
  IconDatabase, 
  IconServer,
} from "@tabler/icons-react";
import { HoverEffect } from "./ui/card-hover-effect";

const technologies = [
  { name: "C++", icon: <IconBrandGit size={40} className="text-blue-500" /> },
  { name: "JavaScript", icon: <IconBrandGit size={40} className="text-yellow-400" /> },
  { name: "TypeScript", icon: <IconBrandTypescript size={40} className="text-blue-500" /> },
  { name: "React.js", icon: <IconBrandReact size={40} className="text-blue-400" /> },
  { name: "Next.js", icon: <IconBrandNextjs size={40} className="text-white" /> },
  { name: "Node.js", icon: <IconBrandNodejs size={40} className="text-green-500" /> },
  { name: "Express.js", icon: <IconServer size={40} className="text-gray-400" /> },
  { name: "MongoDB", icon: <IconBrandMongodb size={40} className="text-green-400" /> },
  { name: "Neon DB", icon: <IconDatabase size={40} className="text-pink-400" /> },
  { name: "Drizzle ORM", icon: <IconDatabase size={40} className="text-blue-400" /> },
  { name: "Redis", icon: <IconDatabase size={40} className="text-red-500" /> },
  { name: "Appwrite", icon: <IconDatabase size={40} className="text-purple-500" /> },
  { name: "Firebase", icon: <IconBrandFirebase size={40} className="text-yellow-500" /> },
  { name: "Tailwind CSS", icon: <IconBrandTailwind size={40} className="text-teal-400" /> },
  { name: "Docker", icon: <IconBrandDocker size={40} className="text-blue-500" /> },
  { name: "AWS", icon: <IconBrandAws size={40} className="text-yellow-400" /> },
  { name: "Git & GitHub", icon: <IconBrandGit size={40} className="text-gray-400" /> },
  { name: "REST APIs", icon: <IconServer size={40} className="text-green-500" /> },
  { name: "Real-Time Collaboration", icon: <IconServer size={40} className="text-purple-400" /> },
];

const TechStack = () => {
  return (

  
      <section id="techstack" className="py-16 px-6 bg-gray-900 text-white">
          
        <div className="max-w-5xl mx-auto text-center px-8">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ColourfulText text="Tech Stack & Technologies" />
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I specialize in <ColourfulText text="MERN Stack" /> development and scalable, high-performance applications. Below are some of the technologies I work with:
          </motion.p>

     <HoverEffect items={technologies}/>
        </div>
      </section>
      
  );
};

export default TechStack;
