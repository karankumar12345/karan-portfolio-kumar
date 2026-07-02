"use client";
import { motion } from "framer-motion";
import { FaLocationArrow, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

// import MagicButton from ".";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";

const socialMedia = [
  {
    id: 1,
    icon: <FaGithub className="text-xl" />,
    link: "https://github.com/karankumar12345",
    label: "GitHub"
  },
  {
    id: 2,
    icon: <FaLinkedin className="text-xl" />,
    link: "https://www.linkedin.com/in/karan-kumar-823190256/",
    label: "LinkedIn"
  },
  {
    id: 3,
    icon: <FaCode className="text-xl" />,
    link: "https://leetcode.com/Karan1_2",
    label: "LeetCode"
  }
];

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20 text-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center backdrop-blur-sm"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s build your next <span className="text-blue-400">high-impact</span> product
          </h1>
          <p className="text-gray-300 md:mt-6 my-4 text-lg max-w-2xl">
            Open to full-time roles, freelance projects, and product collaborations in full-stack development and real-time applications.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <a href="mailto:karankumar2004122@gmail.com">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col-reverse items-center justify-between gap-8 md:flex-row"
        >
          <p className="text-gray-400 text-sm md:text-base">
            Copyright © {new Date().getFullYear()} Karan Kumar. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {socialMedia.map((info) => (
              <motion.div
                key={info.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group"
              >
                <Link 
                  href={info.link} 
                  target="_blank" 
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={info.label}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300">
                    {info.icon}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;