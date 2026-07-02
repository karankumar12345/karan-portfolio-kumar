"use client";
import projects from "@/data/Project";
import { ColourfulText } from "./ui/ColorFull-Text";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaCodeBranch } from "react-icons/fa";

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
  "Socket.IO": "/socketio.svg",
  "JWT": "/jwt.svg",
  "Redis": "/redis.svg",
  "Sequelize": "/sequelize.svg",
  "MySQL": "/mysql.svg",
  "PostgreSQL": "/postgresql.svg",
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
    <section className="px-4 py-20 text-white sm:px-6 lg:px-10" id="Projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto max-w-7xl"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <ColourfulText text="Featured Projects" />
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
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

              <h3 className="mb-3 text-2xl font-semibold">
                <ColourfulText text={project.name} />
              </h3>
              
              <p className="mb-5 text-gray-300 leading-relaxed">{project.description}</p>

              {project.highlights && (
                <ul className="mb-5 space-y-1 text-sm text-slate-300">
                  {project.highlights.slice(0, 4).map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <FaCodeBranch className="mt-1 text-[10px] text-blue-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, idx: number) => (
                  <span
                    key={idx}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-200"
                    style={{
                      backgroundImage: techIcons[tech] ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${techIcons[tech]})` : undefined,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
                <div className="flex flex-wrap gap-4">
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
