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
  IconBrandCpp,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandVscode,
  IconBrandVercel,
} from "@tabler/icons-react";

const technologies = [
  { name: "C++", icon: <IconBrandCpp size={40} className="text-blue-500" />, category: "Languages", level: "Advanced" },
  { name: "JavaScript", icon: <IconBrandJavascript size={40} className="text-yellow-400" />, category: "Languages", level: "Expert" },
  { name: "TypeScript", icon: <IconBrandTypescript size={40} className="text-blue-500" />, category: "Languages", level: "Advanced" },
  { name: "Python", icon: <IconBrandPython size={40} className="text-green-500" />, category: "Languages", level: "Intermediate" },
  { name: "React.js", icon: <IconBrandReact size={40} className="text-blue-400" />, category: "Frontend", level: "Expert" },
  { name: "Next.js", icon: <IconBrandNextjs size={40} className="text-white" />, category: "Frontend", level: "Advanced" },
  { name: "Node.js", icon: <IconBrandNodejs size={40} className="text-green-500" />, category: "Backend", level: "Expert" },
  { name: "Express.js", icon: <IconServer size={40} className="text-gray-400" />, category: "Backend", level: "Advanced" },
  { name: "MongoDB", icon: <IconBrandMongodb size={40} className="text-green-400" />, category: "Database", level: "Advanced" },
  { name: "Neon DB", icon: <IconDatabase size={40} className="text-pink-400" />, category: "Database", level: "Intermediate" },
  { name: "Drizzle ORM", icon: <IconDatabase size={40} className="text-blue-400" />, category: "Database", level: "Intermediate" },
  { name: "Redis", icon: <IconDatabase size={40} className="text-red-500" />, category: "Database", level: "Intermediate" },
  { name: "Appwrite", icon: <IconDatabase size={40} className="text-purple-500" />, category: "Backend", level: "Intermediate" },
  { name: "Firebase", icon: <IconBrandFirebase size={40} className="text-yellow-500" />, category: "Backend", level: "Advanced" },
  { name: "Tailwind CSS", icon: <IconBrandTailwind size={40} className="text-teal-400" />, category: "Frontend", level: "Expert" },
  { name: "Docker", icon: <IconBrandDocker size={40} className="text-blue-500" />, category: "DevOps", level: "Intermediate" },
  { name: "AWS", icon: <IconBrandAws size={40} className="text-yellow-400" />, category: "DevOps", level: "Intermediate" },
  { name: "Git & GitHub", icon: <IconBrandGit size={40} className="text-gray-400" />, category: "Tools", level: "Expert" },
  { name: "VS Code", icon: <IconBrandVscode size={40} className="text-blue-400" />, category: "Tools", level: "Expert" },
  { name: "Vercel", icon: <IconBrandVercel size={40} className="text-white" />, category: "Tools", level: "Advanced" },
  { name: "REST APIs", icon: <IconServer size={40} className="text-green-500" />, category: "Backend", level: "Expert" },
  { name: "Real-Time Collaboration", icon: <IconServer size={40} className="text-purple-400" />, category: "Features", level: "Advanced" },
];

const categories = ["Languages", "Frontend", "Backend", "Database", "DevOps", "Tools", "Features"];

const levelColors = {
  Expert: "bg-green-500/20 text-green-400",
  Advanced: "bg-blue-500/20 text-blue-400",
  Intermediate: "bg-yellow-500/20 text-yellow-400",
};

const TechStack = () => {
  return (
    <section id="techstack" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <ColourfulText text="Tech Stack & Technologies" />
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            I specialize in <ColourfulText text="MERN Stack" /> development and scalable, high-performance applications. 
            Below are the technologies I work with, organized by category:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <div className="relative">
                        {tech.icon}
                        <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-300">{tech.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${levelColors[tech.level as keyof typeof levelColors]}`}>
                          {tech.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            My tech stack evolves with the industry's best practices and emerging trends.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
