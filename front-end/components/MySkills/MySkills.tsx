import React from "react";
import Image from "next/image";

import { skillsIcons } from "@/public/constants";

const MySkills = () => {
  return (
    <section className="bg-white-900 dark:bg-black-200 py-6 md:py-12 lg:py-24">
      <div className="max-container px-[2.5%]">
        <h1 className="heading-2 text-black-200  text-center mb-12">
          <span className="strip-bgW dark:text-white-900">My Skills</span>
        </h1>

        <div id="skills" className="flex flex-wrap justify-center">
          {skillsIcons.map((icon, ind) => (
            <div
              className="transition-transform ease-in-out duration-300 delay-100 m-1 sm:m-5 w-[75px] h-[75px] bg-white-800 dark:bg-[#192332] rounded-full flex align-middle justify-center hover:bg-white-900 hover:shadow-md hover:scale-125 transform-gpu"
              key={ind}
            >
              <Image
                className="fill-current text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
                src={icon.icon}
                alt={`${icon.icon}-${ind}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
