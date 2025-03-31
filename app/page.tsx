
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/Footer'

import HeroSection from '@/components/HeroSection'

// import JustDemo from '@/components/JustDemo'
import { FloatingNavDemo } from '@/components/NavBar'
import ProjectSection from '@/components/ProjectList'
// import { ProjectSection } from '@/components/ProjectList'
import TechStack from '@/components/TechStack'
import { BackgroundLines } from '@/components/ui/background-lines'

import React from 'react'



const page = () => {
  return (

    <>
    <BackgroundLines className='w-full h-full'>
      <FloatingNavDemo/>
      
     <HeroSection/>
     <AboutSection/>
     <TechStack/>
  
  <ProjectSection/>
  <ExperienceSection/>
  <Footer/>
     </BackgroundLines>
   
     
     </>

  
  )
}

export default page

