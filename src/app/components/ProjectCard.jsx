

import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, techStack, gitUrl, previewUrl, isReversed }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      }  overflow-hidden bg-white dark:bg-[#121212] shadow-lg h-full`}
    >
      {/* Image Section - Fixed height to match text section */}
      <div className="md:w-1/2 w-full h-80 md:h-auto">
        <div
          className="h-full w-full relative group"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] dark:bg-[#121212] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link
              href={gitUrl}
               target="_blank"
            rel="noopener noreferrer"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer dark:group-hover/link:text-white" />
            </Link>
            <Link
              href={previewUrl}

               target="_blank"
            rel="noopener noreferrer"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Text Section - Now matches image height */}
      <div className="md:w-1/2 pt-6 md:p-6 flex flex-col justify-between h-full">
        <div>
          <h5 className="text-2xl font-semibold mb-3 text-black dark:text-white">{title}</h5>
          <p className="text-gray-600 dark:text-[#ADB7BE] md:mb-4">{description}</p>
        </div>
        
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack?.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200  dark:bg-gray-800 text-sm px-3 md:py-1 rounded-full text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;