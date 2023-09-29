import React from "react";

import CaseStudiesCard from "@/components/CaseStudiesCard/CaseStudiesCard";
import { caseStudiesData } from "@/public/constants";

import { generateRandomColor } from "@/utils/randomColorGenerator";

const CaseStudies = () => {
  return (
    <>
      <div className="bg-white-800 py-24 dark:bg-black-200">
        <div className="flex max-container px-[2.5%] sm:flex-col-reverse py-10">
          <div className="text-center">
            <h1 className="text-center heading-3 sm:heading-1 text-black-200 dark:text-white-900 mb-8">
              Recent <span className="strip">Case Studies</span>
            </h1>
            <p className="para-regular text-white-500 dark:text-white-800 flex justify-center">
              <span className="">
                Dive into my recent success stories and discover how I have helped clients overcome
                challenges, innovate, and achieve their goals
              </span>
            </p>
          </div>
        </div>

        <div className="max-container px-[2.5%]">
          <div className="flex flex-wrap justify-between lg:gap-9 sm:gap-4">
            {caseStudiesData.map((item) => (
              <CaseStudiesCard key={item.title} caseData={item} bgColor={generateRandomColor()} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
