import { skillsIcons } from "@/public/constants";
import Image from "next/image";
import React from "react";

const TechUsedInProject = () => {
  return (
    <div>
      <div id="skills" className="flex flex-wrap justify-between">
        {skillsIcons.map((icon, ind) => (
          <div
            className="transition-transform ease-in-out duration-300 delay-100 m-1 sm:m-5 w-[75px] h-[75px] bg-white-800 dark:bg-[#192332] rounded-full flex align-middle justify-center hover:bg-white-900 hover:shadow-md hover:scale-125 transform-gpu grayscale hover:grayscale-0"
            key={ind}
          >
            <Image
              className="fill-current text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 "
              src={icon.icon}
              width={48}
              height={48}
              alt={`${icon.icon}-${ind}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechUsedInProject;
