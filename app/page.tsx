
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/Footer'

import HeroSection from '@/components/HeroSection'

// import JustDemo from '@/components/JustDemo'
import { FloatingNavDemo } from '@/components/NavBar'
import ProjectSection from '@/components/ProjectList'
// import { ProjectSection } from '@/components/ProjectList'
import TechStack from '@/components/TechStack'
import React from 'react'

const page = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.20),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.18),transparent_42%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.14),transparent_40%)]" />
      <FloatingNavDemo />
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ProjectSection />
      <ExperienceSection />
      <Footer />
    </main>
  )
}

export default page

