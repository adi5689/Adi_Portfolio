import React from "react";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, gitUrl, PreviewUrl }) => {
  return (
    <div>
      <div
        className="h-32 lg:h-82 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div
          className="overlay items-center justify-center absolute top-0 left-0 w-full 
            h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex 
            group-hover:bg-opacity-80 transition-all duration-500"
        >
          <Link
            href={`${gitUrl}`}
            className="h-8 sm:h-12 w-8 sm:w-12 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-red-600 group/link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 sm:h-8 w-6 sm:w-8 text-[#ADB7BE] absolute 
              top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
               cursor-pointer group-hover/link:text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </Link>

          <Link
            href={`${PreviewUrl}`}
            className="h-8 sm:h-12 w-8 sm:w-12 border-2 relative rounded-full border-[#ADB7BE] hover:border-red-600 group/link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 sm:h-8 w-6 sm:w-8 text-[#ADB7BE] absolute 
              top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
               cursor-pointer group-hover/link:text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] bg-opacity-60 py-6 px-4">
        <h5
          className="text-[16px] lg:text-[20px] text-center 
          font-semibold mb-2">
            {title}
        </h5>
      </div>
    </div>
  );
};

export default ProjectCard;
