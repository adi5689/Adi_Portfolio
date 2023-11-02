"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-[90px] md:pt-[100px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-12 items-center justify-center py-8 px-4 
            xl:gap-16 sm:py-16 xl:px-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
          className="col-span-7 place-self-center text-center 
          sm:text-left"
        >
          <h1 className="text-white mt-5 mb-4 text-4xl sm:text-5xl lg:text-[3rem] font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5c12fd] to-[#ff19fb]">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Aditya.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Frontend Developer!",
                1000,
                "A Web Designer!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ textAlign: "center", display: "inline-block" }}
              repeat={Infinity}
              className="text-[2rem] sm:text-2xl lg:text-[3rem]"
            />
          </h1>
          <p className="text-white mb-6 mr-0 md:mr-7 text-lg lg:text-xl">
            &quot;Crafting Digital Experiences, One Line of Code at a Time&quot;
          </p>
          <div className="flex md:pt-[140px] flex-col lg:flex-row justify-center lg:justify-start">
            <button className="px-1 py-1 rounded-md mr-0 lg:mr-4  bg-gradient-to-br from-[#ff610c] to-[#8600ab] text-white hover:bg-white">
              <a href="#hire">
                <span className="block bg-[#121212] text-white hover:bg-slate-900 h-full w-full rounded-md px-5 py-2">
                  Hire Me
                </span>
              </a>
            </button>
            <button className="px-1 py-1 rounded-md bg-gradient-to-br from-[#ff0c0c] to-[#c800ff] hover:bg-green-500 hover:text-white mt-3 lg:mt-0">
              <a href="https://drive.google.com/file/d/1bb5BFvKjulDhmJbk_ZtQ_g-KrspNd1sX/view?usp=sharing">
                <span className="block bg-[#121212] text-white hover:bg-slate-900 rounded-md px-5 py-2">
                  Download Resume
                </span>
              </a>
            </button>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center items-center mt-4 lg:mt-0">
          <div className="mt-[30px] rounded-full bg-[#bbaaff87] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/dev.png"
              className="absolute  md:ml-3 h-250 w-250 md:h-450 md:w-450 transform-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/5"
              alt="hero-img"
              width={350}
              height={350}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
