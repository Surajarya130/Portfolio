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
      className="flex border border-white rounded-xl p-9 transform hover:translate-x-6 hover:-translate-y-4 transition duration-500 ease-out hover:shadow-workExpCardShadow"
    >
      <div id="logo">
        <Image src={expData.logo} alt="slack" />
      </div>
      <div className="ml-8">
        <h2 className="base-bold text-black-200">{expData.title}</h2>
        <p className="small-regular text-white-500">{expData.desc}</p>
      </div>
    </div>
  ));
};

export default WorkExpCard;
