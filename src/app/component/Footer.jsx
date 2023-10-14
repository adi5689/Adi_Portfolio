import React from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="h-30 flex flex-col lg:flex-row justify-between bg-slate-800 bg-opacity-60 px-4 py-4 lg:px-8 lg:py-6">
      <div className="socials flex flex-row justify-center mb-2 lg:mb-0 gap-2 flex-10">
          <Link href="https://github.com/adi5689">
            <Image src={GithubIcon} alt="Github Icon" className="h-[30px]"/>
          </Link>
          <Link href="https://www.linkedin.com/in/aditya--sahu89/">
            <Image src={LinkedinIcon} alt="Github Icon" className="h-[30px]"/>
          </Link>
        </div>
        <div className="flex justify-center items-center">
        <span className="text-white ">Portfolio Made by Adi.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
