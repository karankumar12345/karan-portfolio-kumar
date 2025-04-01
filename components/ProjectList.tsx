"use client";
import projects from "@/data/Project";

import { ColourfulText } from "./ui/ColorFull-Text";
import { AnimatedTooltip } from "./ui/animated-tooltip";
// import { AnimatedTooltip } from "./AnimatedTooltip";

const techIcons: Record<string, string> = {
  "Next.js":"/next13.svg",
  "React.js":"/re.svg",
  "Tailwind":'/tail.svg',
"Clerk":'/c.svg',
"cloundary":"/cloudName.svg",
"Node.js":"/nodejs.png",
"Express.js":"/expressjs.png",
"MongoDB":"/mongodb.png",
"Gemini":"/Gemini.png",
"VdoCipher":"/VdoCipher.png",
"Neon DB":"/Neon DB.jpg",
"Drizzle ORM":"/orm.png",
"Appwrite":"/app.svg",
"VAPI":"/vapi.jpg",
"Firebase":"/firebase.png",
"Aceternity UI":"/Aceternity UI.png",




};

export default function ProjectSection() {
  return (
    <section className="py-12 px-6 bg-gray-900 text-white lg:p-[10%]" id="Projects">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-black p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              <ColourfulText text={project.name} />
            </h3>
            <p className="text-white mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, idx:number) => (
                <AnimatedTooltip
                  key={idx}
                  id={idx}
                  icon={techIcons[tech]}
                  name={tech}
                />
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                {project.github.frontend && (
                  <a
                    href={project.github.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    Frontend Repo
                  </a>
                )}
                {project.github.backend && (
                  <a
                    href={project.github.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    Backend Repo
                  </a>
                )}
              </div>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
