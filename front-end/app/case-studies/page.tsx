import Image from "next/image";
import React from "react";

import pro1 from "@/public/assets/pro1.svg";

const CaseStudies = () => {
  return (
    <>
      <div className="bg-white-900 py-24 dark:bg-black-200">
        <div className="flex max-container sm:flex-col-reverse py-10">
          <div className="text-center">
            <h1 className="text-center heading-1 text-black-200 dark:text-white-900 mb-8">
              <span className="strip">Recent Case Studies</span>
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
          <div className="flex-col sm:flex sm:flex-row pb-10"></div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
