"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const skillLogo = [
  {
    img: "/images/skills/html.png",
    title:"HTML5",
  },
  {
    img: "/images/skills/css.png",
    title:"CSS3",
  },
  {
    img: "/images/skills/Javascript.png",
    title:"Javascript",
  },
  {
    img: "/images/skills/React.png",
    title:"ReactJs",
  },
  {
    img: "/images/skills/redux.png",
    title: "Redux",
  },
  {
    img: "/images/skills/tailwind.png",
    title:"Tailwind CSS",
  },
  {
    img: "/images/skills/git.png",
    title:"Git",
  },
  {
    img: "/images/skills/figma.png",
    title:"Figma",
  },
  {
    img: "/images/skills/canva.png",
    title:"Canva",
  },
];

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 gap-3">
        {skillLogo.map((skill, index) => (
          <div key={index} className="flex flex-col justify-center items-center px-2 py-2 lg:py-0">
              <div className="rounded-full h-[70px] w-[70px] flex flex-col items-center justify-center bg-[#0e90d18b]">
                <Image
                  src={skill.img}
                  alt={`Skill ${index + 1}`}
                  width={30}
                  height={30}
                />
              </div>
              <div className="text-left">
                <span>{skill.title}</span>
              </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span>National Institute of Science and Technology, Berhampur</span>
          <br />
          <span className="text-[#ADB7BE]">{"=>"} Aug/19 - MAR/23</span>
          <br />
          <span className="text-[#ADB7BE]">{"=>"} EEE</span>
        </li>
        <li>
          <span>Sainik School Bhubaneswar</span>
          <br />
          <span className="text-[#ADB7BE]">{"=>"} Apr/11 - Mar/18</span>
          <br />
          <span className="text-[#ADB7BE]">{"=>"} Science</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span>BAKCHO₹: Frontend Developer (Trainee)</span>
          <br />
          <span className="text-[#ADB7BE]">{"=>"} FEB/23 - OCT/23</span>
          <br />
          <span className="text-[#ADB7BE]">
            {"=>"} Tech Stack: Figma, HTML, CSS, ReactJs, Javascript, Tailwind
          </span>
        </li>
        <li>
          <span>11x Infisol: Frontend Developer Intern</span>
          <br />
          <span className="text-[#ADB7BE]">{"=>"} OCT/22 - FEB/23</span>
          <br />
          <span className="text-[#ADB7BE]">
            {"=>"} Tech Stack: ReactJs, Javascript, Bootstrap
          </span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <h2 className="sm:block text-3xl sm:text-4xl text-center font-bold text-white mb-3">
        About Me
      </h2>
      <div
        className="md:grid md:grid-cols-2 gap-8 
            items-center justify-center pt-[1rem] pb-[4rem] px-4 
            xl:gap-16 sm:py-12 xl:px-16"
      >
        <Image
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1744797244/WhatsApp_Image_2025-04-16_at_11.57.56_AM_liyoub.jpg"
          alt="img"
          width={500}
          height={500}
          className="mb-5 rounded-full"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-sm md:text-base lg:text-lg">
            A dynamic frontend developer passionate about crafting immersive
            and responsive web applications. Proficient in JavaScript, React,
            Redux, Tailwind CSS, Bootstrap, HTML, CSS, Next.js, Strapi, Git, Figma and Canva,
            I&apos;m always eager to expand my skill set and stay at the forefront of
            emerging technologies. A quick learner, I thrive in collaborative
            environments, eager to work with like-minded individuals to
            transform innovative ideas into exceptional user-centric
            applications. Let&apos;s team up to create remarkable digital experiences
            that leave a lasting impact!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
