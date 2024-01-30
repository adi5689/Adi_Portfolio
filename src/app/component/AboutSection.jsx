"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const skillLogo = [
  {
    img: "https://i.postimg.cc/d1RWQC4p/IMG-20240130-WA0016.jpg",
    title:"HTML5",
  },
  {
    img: "https://i.postimg.cc/sX3YcN4H/IMG-20240130-WA0010.jpg",
    title:"CSS3",
  },
  {
    img: "https://i.postimg.cc/qMKNNG8N/IMG-20240130-WA0021.jpg",
    title:"Javascript",
  },
  {
    img: "https://i.postimg.cc/76b6w1HY/IMG-20240130-WA0013.jpg",
    title:"ReactJs",
  },
  {
    img: "https://i.postimg.cc/d0w40BxF/IMG-20240130-WA0020.jpg",
    title: "Redux",
  },
  {
    img: "https://i.postimg.cc/RZfDhqC7/IMG-20240130-WA0017.jpg",
    title:"Tailwind CSS",
  },
  {
    img: "https://i.postimg.cc/tJQ1XrBt/IMG-20240130-WA0011.jpg",
    title:"Git",
  },
  {
    img: "https://i.postimg.cc/Hnsq7mvp/IMG-20240130-WA0014.jpg",
    title:"Figma",
  },
  {
    img: "https://i.postimg.cc/RVvFXJyF/IMG-20240130-WA0012.jpg",
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
          <span className="text-[#ADB7BE]">{"=>"} FEB/23 - SEPT/23</span>
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
          src="https://i.postimg.cc/tJZzcmY3/IMG-20240130-WA0015.jpg"
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
