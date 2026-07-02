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
  IconBrandJavascript,
  IconBrandRedux,
  IconBrandSocketIo,
  IconBrandGit,
  IconTopologyComplex,
  IconPhoneCall,
  IconShieldLock,
  IconCloudComputing,
  IconDatabase,
  IconServer,
} from "@tabler/icons-react";

const technologies = [
  { name: "JavaScript (ES2022+)", icon: <IconBrandJavascript size={28} className="text-yellow-300" />, category: "Languages", level: "Expert" },
  { name: "TypeScript", icon: <IconBrandTypescript size={28} className="text-blue-400" />, category: "Languages", level: "Expert" },
  { name: "C++", icon: <IconTopologyComplex size={28} className="text-indigo-300" />, category: "Languages", level: "Advanced" },
  { name: "SQL", icon: <IconDatabase size={28} className="text-cyan-300" />, category: "Languages", level: "Advanced" },

  { name: "React.js", icon: <IconBrandReact size={28} className="text-sky-400" />, category: "Frontend", level: "Expert" },
  { name: "Next.js 14/15", icon: <IconBrandNextjs size={28} className="text-white" />, category: "Frontend", level: "Expert" },
  { name: "Redux Toolkit", icon: <IconBrandRedux size={28} className="text-purple-300" />, category: "Frontend", level: "Advanced" },
  { name: "Tailwind CSS", icon: <IconBrandTailwind size={28} className="text-teal-300" />, category: "Frontend", level: "Expert" },
  { name: "RTK Query", icon: <IconBrandRedux size={28} className="text-violet-300" />, category: "Frontend", level: "Advanced" },

  { name: "Node.js", icon: <IconBrandNodejs size={28} className="text-green-400" />, category: "Backend", level: "Expert" },
  { name: "Express.js", icon: <IconServer size={28} className="text-slate-300" />, category: "Backend", level: "Expert" },
  { name: "RESTful APIs", icon: <IconServer size={28} className="text-emerald-300" />, category: "Backend", level: "Expert" },
  { name: "Microservices", icon: <IconCloudComputing size={28} className="text-blue-300" />, category: "Backend", level: "Advanced" },
  { name: "MVC Architecture", icon: <IconTopologyComplex size={28} className="text-rose-300" />, category: "Backend", level: "Advanced" },

  { name: "MongoDB", icon: <IconBrandMongodb size={28} className="text-green-400" />, category: "Databases", level: "Advanced" },
  { name: "MySQL", icon: <IconDatabase size={28} className="text-blue-300" />, category: "Databases", level: "Advanced" },
  { name: "PostgreSQL", icon: <IconDatabase size={28} className="text-indigo-300" />, category: "Databases", level: "Advanced" },
  { name: "Redis Pub/Sub", icon: <IconDatabase size={28} className="text-red-400" />, category: "Databases", level: "Advanced" },
  { name: "Sequelize ORM", icon: <IconDatabase size={28} className="text-teal-300" />, category: "Databases", level: "Advanced" },

  { name: "WebRTC", icon: <IconPhoneCall size={28} className="text-lime-300" />, category: "Real-Time", level: "Expert" },
  { name: "WebSockets", icon: <IconBrandSocketIo size={28} className="text-zinc-200" />, category: "Real-Time", level: "Expert" },
  { name: "Socket.IO", icon: <IconBrandSocketIo size={28} className="text-white" />, category: "Real-Time", level: "Expert" },
  { name: "Event-Driven Architecture", icon: <IconTopologyComplex size={28} className="text-orange-300" />, category: "Real-Time", level: "Advanced" },
  { name: "Live Synchronization", icon: <IconBrandSocketIo size={28} className="text-cyan-300" />, category: "Real-Time", level: "Advanced" },

  { name: "Asterisk PBX", icon: <IconPhoneCall size={28} className="text-emerald-300" />, category: "Telephony", level: "Advanced" },
  { name: "JsSIP", icon: <IconPhoneCall size={28} className="text-fuchsia-300" />, category: "Telephony", level: "Advanced" },
  { name: "SIP Trunking", icon: <IconPhoneCall size={28} className="text-purple-300" />, category: "Telephony", level: "Advanced" },
  { name: "STUN / TURN", icon: <IconPhoneCall size={28} className="text-sky-300" />, category: "Telephony", level: "Advanced" },
  { name: "IVR / ACD Queues", icon: <IconPhoneCall size={28} className="text-yellow-300" />, category: "Telephony", level: "Advanced" },

  { name: "JWT Auth", icon: <IconShieldLock size={28} className="text-blue-300" />, category: "Security", level: "Expert" },
  { name: "2FA", icon: <IconShieldLock size={28} className="text-green-300" />, category: "Security", level: "Advanced" },
  { name: "Account Lockout", icon: <IconShieldLock size={28} className="text-amber-300" />, category: "Security", level: "Advanced" },
  { name: "Hierarchical RBAC", icon: <IconShieldLock size={28} className="text-rose-300" />, category: "Security", level: "Advanced" },

  { name: "Cloudinary", icon: <IconCloudComputing size={28} className="text-blue-300" />, category: "DevOps & Tools", level: "Advanced" },
  { name: "VdoCipher", icon: <IconCloudComputing size={28} className="text-purple-300" />, category: "DevOps & Tools", level: "Advanced" },
  { name: "Git & GitHub", icon: <IconBrandGit size={28} className="text-zinc-200" />, category: "DevOps & Tools", level: "Expert" },
  { name: "GitHub Actions", icon: <IconBrandGit size={28} className="text-zinc-100" />, category: "DevOps & Tools", level: "Advanced" },
  { name: "Postman", icon: <IconServer size={28} className="text-orange-300" />, category: "DevOps & Tools", level: "Advanced" },
];

const categories = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Real-Time",
  "Telephony",
  "Security",
  "DevOps & Tools",
];

const levelColors = {
  Expert: "bg-green-500/20 text-green-400",
  Advanced: "bg-blue-500/20 text-blue-400",
  Intermediate: "bg-yellow-500/20 text-yellow-400",
};

const TechStack = () => {
  return (
    <section id="techstack" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <ColourfulText text="Skills & Technical Arsenal" />
          </h2>
          <p className="mx-auto max-w-3xl px-4 text-base text-gray-300 sm:text-lg">
            Resume-aligned strengths across full stack engineering, real-time systems, telephony infrastructure, and production-grade security.
          </p>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 p-5">
            <p className="text-xs uppercase tracking-widest text-slate-200">Core Focus</p>
            <p className="mt-2 text-lg font-semibold text-white">Scalable product engineering</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 p-5">
            <p className="text-xs uppercase tracking-widest text-slate-200">Real-Time Delivery</p>
            <p className="mt-2 text-lg font-semibold text-white">Sub-100ms state synchronization mindset</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-green-500/10 p-5">
            <p className="text-xs uppercase tracking-widest text-slate-200">Reliability</p>
            <p className="mt-2 text-lg font-semibold text-white">Security-first, production-ready architecture</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-blue-300">{category}</h3>
              <div className="grid grid-cols-1 gap-3">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-black/20 p-3 transition-all duration-300 hover:border-white/15 hover:bg-white/5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          {tech.icon}
                          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <span className="text-sm text-gray-200">{tech.name}</span>
                      </div>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] sm:text-xs ${levelColors[tech.level as keyof typeof levelColors]}`}>{tech.level}</span>
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
          className="mt-14 text-center"
        >
          <p className="mx-auto max-w-2xl px-4 text-gray-400">
            Focused on building robust systems that are secure, maintainable, and built for scale from day one.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
