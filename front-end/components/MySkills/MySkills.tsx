import React from "react";
import Image from "next/image";

import { nextIcon } from "@/public/assets";

const MySkills = () => {
  const icons = [
    {
      name: "JS",
      icon: nextIcon,
    },
    {
      name: "JS2",
      icon: nextIcon,
    },
    {
      name: "JS3",
      icon: nextIcon,
    },
    {
      name: "JS4",
      icon: nextIcon,
    },
    {
      name: "JS5",
      icon: nextIcon,
    },
    {
      name: "JS6",
      icon: nextIcon,
    },
    {
      name: "JS7",
      icon: nextIcon,
    },
    {
      name: "JS8",
      icon: nextIcon,
    },
    {
      name: "JS9",
      icon: nextIcon,
    },
    {
      name: "JS10",
      icon: nextIcon,
    },
    {
      name: "JS11",
      icon: nextIcon,
    },
    {
      name: "JS12",
      icon: nextIcon,
    },
    {
      name: "JS13",
      icon: nextIcon,
    },
    {
      name: "JS14",
      icon: nextIcon,
    },
    {
      name: "JS15",
      icon: nextIcon,
    },
    {
      name: "JS16",
      icon: nextIcon,
    },
  ];
  return (
    <section className="bg-white-900 py-24">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="heading-2 text-black-200 text-center mb-12">
          <span className="bg-accentDef-secondary">My Skills</span>
        </h1>

        <div id="skills" className="flex flex-wrap justify-center">
          {icons.map((icon, ind) => (
            <div
              className="mx-5 my-5  w-[75px] h-[75px] bg-white-800 rounded-full flex align-middle justify-center hover:bg-white-900 hover:shadow-md hover:scale-110 hover:translate-y-1"
              key={ind}
            >
              <Image src={icon.icon} alt={`${icon.icon}-${ind}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
