"use client";

import { slack } from "@/public/assets";
import Image from "next/image";
import React from "react";

type Experience = {
  logo: string;
  title: string;
  desc: string;
};

interface WorkExpCardProps {
  workExpData: Experience[];
}

const WorkExpCard: React.FC<WorkExpCardProps> = ({ workExpData }) => {
  return workExpData.map((expData, ind) => (
    <div
      key={ind}
      className="flex border border-white rounded-xl lg:p-9 p-5 transform hover:translate-x-6 hover:-translate-y-4 transition duration-500 ease-out hover:shadow-workExpCardShadow dark:hover:shadow-cardShadowDark z-[-10] my-5"
    >
      <div id="logo">
        <Image className="dark:bg-white-800" src={expData.logo} alt="slack" />
      </div>
      <div className="ml-8 ">
        <h2 className="base-bold text-black-200 dark:text-white-800">{expData.title}</h2>
        <p className="small-regular text-white-500 dark:text-white-800">{expData.desc}</p>
      </div>
    </div>
  ));
};

export default WorkExpCard;
