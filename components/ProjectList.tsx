"use client";
import projects from "@/data/Project";
import { ColourfulText } from "./ui/ColorFull-Text";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";

const techIcons: Record<string, string> = {
  "Next.js": "/next13.svg",
  "React.js": "/re.svg",
  "Tailwind": '/tail.svg',
  "Clerk": '/c.svg',
  "cloundary": "/cloudName.svg",
  "Node.js": "/nodejs.png",
  "Express.js": "/expressjs.png",
  "MongoDB": "/mongodb.png",
  "Gemini": "/Gemini.png",
  "VdoCipher": "/VdoCipher.png",
  "Neon DB": "/Neon DB.jpg",
  "Drizzle ORM": "/orm.png",
  "Appwrite": "/app.svg",
  "VAPI": "/vapi.jpg",
  "Firebase": "/firebase.png",
  "Aceternity UI": "/Aceternity UI.png",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function ProjectSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white lg:p-[10%]" id="Projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <ColourfulText text="Featured Projects" />
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              {/* Video Preview */}
              {project.videoUrl && (
                <div className="relative mb-4 rounded-lg overflow-hidden aspect-video">
                  <video
                    className="w-full h-full object-cover"
                 
                    controls
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
  <FaPlay className="text-4xl text-white" />
</div>

                </div>
              )}

              <h3 className="text-2xl font-semibold mb-3">
                <ColourfulText text={project.name} />
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, idx: number) => (
                  <AnimatedTooltip
                    key={idx}
                    id={idx}
                    icon={techIcons[tech]}
                    name={tech}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
                <div className="flex gap-4">
                  {project.github.frontend && (
                    <a
                      href={project.github.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub className="text-xl" />
                      <span>Frontend</span>
                    </a>
                  )}
                  {project.github.backend && (
                    <a
                      href={project.github.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub className="text-xl" />
                      <span>Backend</span>
                    </a>
                  )}
                </div>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
