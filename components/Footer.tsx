"use client";
/* eslint-disable @next/next/no-img-element */
import { FaLocationArrow } from "react-icons/fa6";

// import MagicButton from ".";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";

export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/karankumar12345"
    },
   
    {
      id: 3,
      img: "/link.svg",
        link:"https://www.linkedin.com/in/karan-kumar-823190256/"
    },
  ];
  
const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-gray-900 text-white" id="contact">
   

      <div className="flex flex-col items-center justify-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:karankumar2004122@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className=" flex mt-16 flex-col-reverse justify-center items-center gap-5">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 karan kumar 
        </p>

        <div className="flex items-center justify-between md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
            
              <Link href={info.link} target="_blank" className="absolute">
              <img src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;